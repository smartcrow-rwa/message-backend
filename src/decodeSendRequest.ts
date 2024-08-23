import { ethers } from 'ethers';

function extractFunctionName(signature: string): string {
    // Regular expression to match the function name before the first parenthesis
    const match = signature.match(/^([^\(]+)\(/);
    
    // Return the matched function name or an empty string if not matched
    return match ? match[1].trim() : '';
  }

function addUniqueString(arr: string[], newString: string): string[] {
    // Check if the string is already in the array
    if (!arr.includes(newString)) {
        // If not, add the string to the array
        arr.push(newString);
    }
    return arr;
}

export async function decodeSendRequests(json: any){
try {
    let uniqueAddress:string[] = [];
    let txHistory = [];
    let sum = 0;
    for (let i = 0; i < json.result.length; i++) {
      const blockdata = json.result[i]; 
      if(blockdata["functionName"]!=""){
        const data = blockdata.input;
        const interfacedata = "function "+ blockdata["functionName"];
        const decoder = new ethers.Interface([interfacedata]);
        const functionname = extractFunctionName(blockdata["functionName"]);
        const decodedData = decoder.decodeFunctionData(functionname,data);
        // Add all values
        sum = sum+ parseInt(blockdata.value);
        // Add to tx history 
        if(functionname=="createBonusInfo"){
          const tx = {
            "timestamp": blockdata["timeStamp"],
            "sender": blockdata["from"],
            "receiver": decodedData[0],
            "propertyAddress": decodedData[1],
            "token": decodedData[8],
            "value":blockdata["value"],
            // "input": decodedData,
            "hash": blockdata["hash"],
          }
          txHistory.push(tx);
          // Add unique address
          uniqueAddress = addUniqueString(uniqueAddress, blockdata["from"]);
          uniqueAddress = addUniqueString(uniqueAddress, decodedData[0]); 
        }
  
      }
    }
    const finalresult = {
      "transactionHistory": txHistory,
      "totalValueTraded": sum,
      "totalTransactions": json.result.length,
      "totalUsers": uniqueAddress,
    };
    return finalresult;
} catch (error) {
  console.error(error);
}
}
