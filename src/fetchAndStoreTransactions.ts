import { getTransactions } from "./getNormalTransactions";
import { decodeSendRequests } from "./decodeSendRequest";

// // Example usage:
async function fetchAndStoreTransactions(url:string, address:string) {
    try {
      const data = await getTransactions(url, address);
      return data; // You can return the data if needed
    } catch (error) {
      console.error(error); // This will handle any errors
    }
  }

export async function getTransactionsPageData(url:string, address:string) {
    let finalData = null;
   await fetchAndStoreTransactions(url, address).then(async (transactions) => {
    finalData = await decodeSendRequests(transactions);
    });
    return finalData;
}