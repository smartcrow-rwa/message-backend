import emailjs from '@emailjs/nodejs';
import * as dotenv from 'dotenv';
dotenv.config();

type Email = string;

function isValidEmail(email: string): boolean {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const serviceID = process.env.EMAILJS_SERVICE_ID? process.env.EMAILJS_SERVICE_ID:"";
const templateID = process.env.EMAILJS_TEMPLATE_ID? process.env.EMAILJS_TEMPLATE_ID:"";
const emailJSPublicKey = process.env.EMAILJS_PUBLIC_KEY? process.env.EMAILJS_PUBLIC_KEY:"";
const emailJSPrivateKey = process.env.EMAILJS_PRIVATE_KEY? process.env.EMAILJS_PRIVATE_KEY:"";

export async function sendEmail(mailReceiver:Email, mailMessage:string){
    console.log("Sending Email as SmartCrow ...")
    if (isValidEmail(mailReceiver)) {
        console.log("Email is valid");
      } else {
        console.log("Email is not valid");
      }
    try {
      emailjs
      .send(serviceID, templateID, 
      {
        
          from_name: "SmartCrow Team",
          to_name: mailReceiver,
          message: mailMessage,
          
      }
      , {
        publicKey: emailJSPublicKey,
        privateKey: emailJSPrivateKey, // optional, highly recommended for security reasons
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        },
      );
        
    } catch (error) {
        
    }
    
}