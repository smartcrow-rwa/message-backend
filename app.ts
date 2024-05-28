// // /* eslint-disable no-console */


// Import required modules
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import type { RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';
import { body, validationResult } from 'express-validator';
import { checkAndUpdate } from './src/checkAndUpdate';

// Load environment variables from .env file
import * as dotenv from 'dotenv';
import { sendEmail } from './src/sendEmail';
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for frontend (Enable only 1)
app.use(cors({ origin: 
  'https://smartcrow.xyz'
 }));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // Parse URL-encoded bodies


// Helmet middleware
app.use(helmet());
app.use(
  helmet.hsts({
    // 2 years
    maxAge: 65552000,
    // removing the "includeSubDomains" option
    includeSubDomains: false,
  })
 )
 app.use(helmet.noSniff()); // set X-Content-Type-Options header
 app.use(helmet.frameguard()); // set X-Frame-Options header
 app.use(helmet.xssFilter()); // set X-XSS-Protection header


const limiter1: RequestHandler = rateLimit({
	windowMs: 1440 * 60 * 1000, // 1 minute X 1440 = 1 day
	limit: 15, // Limit each IP to 15 requests per `window` (here, per 15 day).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})
const limiter2: RequestHandler = rateLimit({
	windowMs: 1440 * 60 * 1000, // 1 minute X 1440 = 1 day
	limit: 500, // Limit each IP to 500 requests per `window` (here, per 500 day).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})
app.use('/api/update-contract', limiter1);
app.use('/api/send-email', limiter2);

// Define a route for your API

app.post('/api/update-contract', [
  // Validate and sanitize the 'sender' field
  body('sender').isLength({ min: 42 }),

  // Validate and sanitize the 'receiver' field
  body('receiver').isLength({ min: 42 }),

  // Validate the 'propertNumber' field
  body('propertyNumber').isLength({ min: 10 }),
], async (req: Request, res: Response) => {
  try {
    // Perform the validation by checking for errors
    const errors = validationResult(req);

    // If there are validation errors, respond with a 400 Bad Request status
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract variables from the request body
    const requestbody = req.body;
    console.log(requestbody)
    const sender:string= requestbody.sender.toString();
    const receiver:string= requestbody.receiver.toString();
    const propertyNumber:string= requestbody.propertyNumber.toString();

    // Check and update using the provided variables
    const { meetSalesCondition, postDeadlineCheck } = await checkAndUpdate(sender, receiver, propertyNumber);

    // Send the response with the required values and status
    res.json({
      meetSalesCondition,
      postDeadlineCheck,
      status: 'Contract Updated',
    });
   
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/send-email',[
  // Validate and sanitize the 'email' field
  body('email').isEmail().normalizeEmail(),

  // Validate the 'message' field
  body('message').isLength({ min: 20 }),
], async (req: Request, res: Response) => {
  try {
    // Perform the validation by checking for errors
    const errors = validationResult(req);

    // If there are validation errors, respond with a 400 Bad Request status
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract variables from the request body
    const requestbody = req.body;
    console.log(requestbody)
    const email:string= requestbody.email.toString();
    const message:string= requestbody.message.toString();
    await sendEmail(email,message);
    // Send the response with the required values and status
    res.json({
      status: 200,
      message: "Email Sent"
    });
   
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export {app}


