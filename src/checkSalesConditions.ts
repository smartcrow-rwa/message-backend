import { getPropertyDetails } from "./getPropertyDetails";
import { convertUnixTimestamp } from "./unixToDateConverter";


export async function checkSalesConditions(stringArray: string[], propertyNumber:string, minRequestDays: number){
    console.log("Checking Sales Conditions ...")
    // Store sales details from agreement
    const atPrice:number = parseInt(stringArray[7],10);
    const startDate:number = parseInt(stringArray[3]);
    const endDate:number = parseInt(stringArray[4]);

    // Get sales data from API
    const {lastSaleDate, lastSalePrice } = await getPropertyDetails(propertyNumber)
    console.log("CHECK INN SALES DATA",lastSaleDate, lastSalePrice);

    let additionalDays = 0
    if (minRequestDays == 1){
        additionalDays = 2592000
    }
    else{additionalDays = 5184000}

    const endingPeriod = convertUnixTimestamp(endDate);
    const lockdownPeriod = convertUnixTimestamp(endDate+additionalDays);  


    // 1. Check if property is sold
    if (lastSaleDate && lastSalePrice) {
        // 2. Check if property is sold within start and end time.
        const dateObject = new Date(lastSaleDate);
        const timestamp: number = Math.floor(dateObject.getTime() / 1000);
        console.log("start date, timestamp(last sale date), end date",startDate, timestamp, endDate)
        if (startDate < timestamp && timestamp <= endDate) {
            // 3. Check if agreement has atPrice
            const atCondition: number = parseInt(stringArray[5]);
            if(atCondition==1){
                // 4. Check if sales price has been met at or Above given price
                console.log("Last sales price, Expected sales price", lastSalePrice,atPrice)
                if(parseInt(lastSalePrice) >= atPrice){
                    // Meets sales price
                    return {condition:true,reason: "Meets sales price, deadline and all criterias"}
                }else{
                    // Doesn't meet sales price
                    return {condition:false,reason: "Doesn't meet sales price, should be at or above" +  " Lockout Period until: " + lockdownPeriod}         
                }
            }
            else if(atCondition==2){
                // 5. Check if sales price has been met at or Below given price
                console.log("Last sales price, Expected sales price", lastSalePrice,atPrice)
                if(parseInt(lastSalePrice) <= atPrice){
                    // Meets sales price
                    return {condition:true,reason: "Meets sales price, deadline and all criterias"}
                }else{
                    // Doesn't meet sales price
                    return {condition:false,reason: "Doesn't meet sales price, should be at or below"+  " Lockout Period until: " + lockdownPeriod}         
                }

            }
            else {
                // Meets condition without expected sales price
                return {condition:true,reason: "Meets condition without expected sales price"}
            }      
        }else {
      
            // Didn't perform sales within timeframe
            if (minRequestDays == 1){
                return {condition:false,reason: "Didn't perform sales within timeframe: " + endingPeriod +  " Lockout Period until: " + lockdownPeriod}
            }
            else if(minRequestDays == 2)
            {
                return {condition:false,reason: "Didn't perform sales within timeframe: " + endingPeriod +  " Lockout Period until: " + lockdownPeriod}
            }
            else {
                return {condition:false,reason: "Didn't perform sales within timeframe"+  " Lockout Period until: " + lockdownPeriod}
            }
            
        }
      } else {
        // No latest sales data available
        return {condition:false,reason: "No latest sales data available" +  " Lockout Period until: " + lockdownPeriod}
      }
    // Check Sales time within agreement's start or end date
    

 
   
}