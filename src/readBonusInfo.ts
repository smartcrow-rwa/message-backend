import {abi} from '../contract/contract';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';
dotenv.config();

const contractAddress = process.env.CONTRACT_ADDRESS?process.env.CONTRACT_ADDRESS:"";

export async function readBonusInfo(sender: string, receiver: string, propertyNumber: string) {
    console.log("Reading BonusInfo from the contract ...")
    // Import Wallet
    const provider = new ethers.JsonRpcProvider(process.env.AMOY_RPC_URL);

    // Read our ABI JSON file to create an ABIContract object
    const contract = new ethers.Contract(contractAddress, abi, provider);
    
     // Call method
    // Call the updateBonusInfo function
    const tx = await contract.bonusInfo(
        sender, 
        receiver, 
        propertyNumber
        );

    //For update
    console.log('Result:',tx)
    return tx
  }