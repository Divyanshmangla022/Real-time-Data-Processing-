// config.js
module.exports = {
    apiKey: 'YOUR_API_KEY_HERE',
    cities: ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'],
    interval: 300000, // 5 minutes in milliseconds
    tempThreshold: 35, // Threshold for temperature alerts in Celsius
    alertDuration: 2 // Number of consecutive updates for alert threshold
};
