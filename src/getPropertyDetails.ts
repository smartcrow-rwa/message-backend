import axios, { AxiosResponse } from 'axios';
import { extractAddressAndZip } from './extractAddressAndZip';

const apiUrl = 'https://api.propmix.io/pubrec/assessor/v1/GetPropertyDetails';

export async function getPropertyDetails(
  propertyNumber:string) {
    console.log("Fetching data from Prpomix API ...")
        const headers = {
            'Access-Token': process.env.PROPERTY_API_KEY,
          };
          console.log("Formatting address for Prpomix API ...")

          // Extract Address and Zip Code
          const [formattedAddress, address, zipCode] = extractAddressAndZip(propertyNumber);

          
          // Define query parameters
          const params = {
            OrderId: formattedAddress,
            StreetAddress: address,
            PostalCode: zipCode,
          };
          
          try {
            // Make the API call using Axios
            const response: AxiosResponse = await axios.get(apiUrl, { headers, params });
        
            // Extract LastSaleDate and LastSalePrice from the API response
            const lastSaleDate: string = response.data.Data.Listing.LastSaleDate;
            const lastSalePrice: string = response.data.Data.Listing.LastSalePrice;
        
            // Return the extracted values
            return { lastSaleDate, lastSalePrice };
          } catch (error) {
            // Handle errors
            console.error('Error calling API:', error);
            throw error; // Rethrow the error for the calling code to handle
          }
}