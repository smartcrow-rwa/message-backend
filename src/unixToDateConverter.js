"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertUnixTimestamp = convertUnixTimestamp;
// Importing necessary modules
const luxon_1 = require("luxon");
// Function to convert Unix timestamp to human-readable date and time
function convertUnixTimestamp(unixTimestamp) {
    // Creating a Luxon DateTime object using the provided Unix timestamp (in seconds)
    const dateTime = luxon_1.DateTime.fromSeconds(unixTimestamp);
    // Formatting the DateTime object into a readable date and time string
    const formattedDateTime = dateTime.toFormat('yyyy-MM-dd HH:mm:ss');
    return formattedDateTime;
}
