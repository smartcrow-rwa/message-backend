"use strict";
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
exports.getPropertyDetails = void 0;
const axios_1 = __importDefault(require("axios"));
const extractAddressAndZip_1 = require("./extractAddressAndZip");
const apiUrl = 'https://api.propmix.io/pubrec/assessor/v1/GetPropertyDetails';
function getPropertyDetails(propertyNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Fetching data from Prpomix API ...");
        const headers = {
            'Access-Token': process.env.PROPERTY_API_KEY,
        };
        console.log("Formatting address for Prpomix API ...");
        // Extract Address and Zip Code
        const [formattedAddress, address, zipCode] = (0, extractAddressAndZip_1.extractAddressAndZip)(propertyNumber);
        // Define query parameters
        const params = {
            OrderId: formattedAddress,
            StreetAddress: address,
            PostalCode: zipCode,
        };
        try {
            // Make the API call using Axios
            const response = yield axios_1.default.get(apiUrl, { headers, params });
            // Extract LastSaleDate and LastSalePrice from the API response
            const lastSaleDate = response.data.Data.Listing.LastSaleDate;
            const lastSalePrice = response.data.Data.Listing.LastSalePrice;
            // Return the extracted values
            return { lastSaleDate, lastSalePrice };
        }
        catch (error) {
            // Handle errors
            console.error('Error calling API:', error);
            throw error; // Rethrow the error for the calling code to handle
        }
    });
}
exports.getPropertyDetails = getPropertyDetails;
