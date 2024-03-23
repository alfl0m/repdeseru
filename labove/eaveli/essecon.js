// Get the current date and time
const now = new Date();

// Get the timestamp for the current date and time
const currentTimestamp = now.getTime();

// Convert the timestamp from milliseconds to seconds
const totalSecondsElapsed = Math.floor(currentTimestamp / 1000);

console.log('Total number of seconds elapsed since Unix epoch:', totalSecondsElapsed);
