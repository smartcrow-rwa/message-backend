
// Get the current date as a JavaScript Date object
const currentDateObj = new Date();

// Format the current date as YYYYMMDD
const currentDateIntegerUnixTimeInSeconds: number = Math.floor(currentDateObj.getTime() / 1000);

export async function checkDeadline(endDate: number, minRequestDays: number){
    let additionalDays = 0
    if (minRequestDays == 1){
        additionalDays = 2592000
    }
    else{additionalDays = 5184000}
    console.log("Checking Deadline ...","Current Date:", currentDateObj,currentDateIntegerUnixTimeInSeconds, "End date:", endDate, "Additional Days:", additionalDays)
    return currentDateIntegerUnixTimeInSeconds > (endDate+additionalDays);
    // return currentDateIntegerUnixTimeInSeconds > (endDate);
}