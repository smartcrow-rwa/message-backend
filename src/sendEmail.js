"use strict";
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
exports.sendEmail = void 0;
const nodejs_1 = __importDefault(require("@emailjs/nodejs"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
function isValidEmail(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
const serviceID = process.env.EMAILJS_SERVICE_ID ? process.env.EMAILJS_SERVICE_ID : "";
const templateID = process.env.EMAILJS_TEMPLATE_ID ? process.env.EMAILJS_TEMPLATE_ID : "";
const emailJSPublicKey = process.env.EMAILJS_PUBLIC_KEY ? process.env.EMAILJS_PUBLIC_KEY : "";
const emailJSPrivateKey = process.env.EMAILJS_PRIVATE_KEY ? process.env.EMAILJS_PRIVATE_KEY : "";
function sendEmail(mailReceiver, mailMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Sending Email as SmartCrow ...");
        if (isValidEmail(mailReceiver)) {
            console.log("Email is valid");
        }
        else {
            console.log("Email is not valid");
        }
        try {
            nodejs_1.default
                .send(serviceID, templateID, {
                from_name: "SmartCrow Team",
                to_name: mailReceiver,
                message: mailMessage,
            }, {
                publicKey: emailJSPublicKey,
                privateKey: emailJSPrivateKey, // optional, highly recommended for security reasons
            })
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        }
        catch (error) {
        }
    });
}
exports.sendEmail = sendEmail;
