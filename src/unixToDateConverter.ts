// Importing necessary modules
import { DateTime } from 'luxon';

// Function to convert Unix timestamp to human-readable date and time
export function convertUnixTimestamp(unixTimestamp: number): string {
    // Creating a Luxon DateTime object using the provided Unix timestamp (in seconds)
    const dateTime = DateTime.fromSeconds(unixTimestamp);

    // Formatting the DateTime object into a readable date and time string
    const formattedDateTime = dateTime.toFormat('yyyy-MM-dd HH:mm:ss');

    return formattedDateTime;
}