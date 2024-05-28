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
Object.defineProperty(exports, "__esModule", { value: true });
exports.readBonusInfo = void 0;
const contract_1 = require("../contract/contract");
const ethers_1 = require("ethers");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const contractAddress = process.env.CONTRACT_ADDRESS ? process.env.CONTRACT_ADDRESS : "";
function readBonusInfo(sender, receiver, propertyNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Reading BonusInfo from the contract ...");
        // Import Wallet
        const provider = new ethers_1.ethers.JsonRpcProvider(process.env.AMOY_RPC_URL);
        // Read our ABI JSON file to create an ABIContract object
        const contract = new ethers_1.ethers.Contract(contractAddress, contract_1.abi, provider);
        // Call method
        // Call the updateBonusInfo function
        const tx = yield contract.bonusInfo(sender, receiver, propertyNumber);
        //For update
        console.log('Result:', tx);
        return tx;
    });
}
exports.readBonusInfo = readBonusInfo;
