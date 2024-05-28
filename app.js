"use strict";
// // /* eslint-disable no-console */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Import required modules
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_validator_1 = require("express-validator");
const checkAndUpdate_1 = require("./src/checkAndUpdate");
// Load environment variables from .env file
const dotenv = __importStar(require("dotenv"));
const sendEmail_1 = require("./src/sendEmail");
dotenv.config();
// Create Express app
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT || 3000;
// Enable CORS for frontend (Enable only 1)
app.use((0, cors_1.default)({ origin: 'https://smartcrow.xyz'
}));
app.use(express_1.default.json()); // Parse JSON bodies
app.use(express_1.default.urlencoded({ extended: true, limit: '10kb' })); // Parse URL-encoded bodies
// Helmet middleware
app.use((0, helmet_1.default)());
app.use(helmet_1.default.hsts({
    // 2 years
    maxAge: 65552000,
    // removing the "includeSubDomains" option
    includeSubDomains: false,
}));
app.use(helmet_1.default.noSniff()); // set X-Content-Type-Options header
app.use(helmet_1.default.frameguard()); // set X-Frame-Options header
app.use(helmet_1.default.xssFilter()); // set X-XSS-Protection header
const limiter1 = (0, express_rate_limit_1.default)({
    windowMs: 1440 * 60 * 1000,
    limit: 15,
    standardHeaders: 'draft-7',
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Use an external store for consistency across multiple server instances.
});
const limiter2 = (0, express_rate_limit_1.default)({
    windowMs: 1440 * 60 * 1000,
    limit: 500,
    standardHeaders: 'draft-7',
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    // store: ... , // Use an external store for consistency across multiple server instances.
});
app.use('/api/update-contract', limiter1);
app.use('/api/send-email', limiter2);
// Define a route for your API
app.post('/api/update-contract', [
    // Validate and sanitize the 'sender' field
    (0, express_validator_1.body)('sender').isLength({ min: 42 }),
    // Validate and sanitize the 'receiver' field
    (0, express_validator_1.body)('receiver').isLength({ min: 42 }),
    // Validate the 'propertNumber' field
    (0, express_validator_1.body)('propertyNumber').isLength({ min: 10 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform the validation by checking for errors
        const errors = (0, express_validator_1.validationResult)(req);
        // If there are validation errors, respond with a 400 Bad Request status
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Extract variables from the request body
        const requestbody = req.body;
        console.log(requestbody);
        const sender = requestbody.sender.toString();
        const receiver = requestbody.receiver.toString();
        const propertyNumber = requestbody.propertyNumber.toString();
        // Check and update using the provided variables
        const { meetSalesCondition, postDeadlineCheck } = yield (0, checkAndUpdate_1.checkAndUpdate)(sender, receiver, propertyNumber);
        // Send the response with the required values and status
        res.json({
            meetSalesCondition,
            postDeadlineCheck,
            status: 'Contract Updated',
        });
    }
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
app.post('/api/send-email', [
    // Validate and sanitize the 'email' field
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    // Validate the 'message' field
    (0, express_validator_1.body)('message').isLength({ min: 20 }),
], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Perform the validation by checking for errors
        const errors = (0, express_validator_1.validationResult)(req);
        // If there are validation errors, respond with a 400 Bad Request status
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Extract variables from the request body
        const requestbody = req.body;
        console.log(requestbody);
        const email = requestbody.email.toString();
        const message = requestbody.message.toString();
        yield (0, sendEmail_1.sendEmail)(email, message);
        // Send the response with the required values and status
        res.json({
            status: 200,
            message: "Email Sent"
        });
    }
    catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
