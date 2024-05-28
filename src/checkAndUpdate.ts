import { checkDeadline } from "./checkDeadline";
import { checkSalesConditions } from "./checkSalesConditions";
import { readBonusInfo } from "./readBonusInfo";
export async function checkAndUpdate(
    sender:string,
    receiver:string, 
    propertyNumber:string, 
    ){
    try {
        console.log("Running Check and Update ...")
        const myArray = await readBonusInfo(sender, receiver, propertyNumber)
        const stringArray = myArray.map((value: any) => String(value));
        
        // // Check to update propertySold and meetSalesCondition
        const minRequestDays: number = parseInt(stringArray[6]);
        const meetSalesCondition = await checkSalesConditions(stringArray,propertyNumber, minRequestDays);
        console.log("Meet Sales Condition",meetSalesCondition)
        // // Check to update postDeadlineCheck
        const endDate = parseInt(stringArray[4],10);
        const deadlineChecker = await checkDeadline(endDate, minRequestDays);
        const postDeadlineCheck: number = deadlineChecker === true ? 1 : 2;

        return {meetSalesCondition,postDeadlineCheck}
    } catch (error:any) {
        throw new Error('Error fetching property information: ' + error.message);
    }
}