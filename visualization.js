// app.js
const { fetchAllWeatherData } = require('./weather');
const { calculateDailySummary, storeDailySummary } = require('./summary');
const { checkThresholds } = require('./alert');
const config = require('./config');

async function main() {
    while (true) {
        const weatherData = await fetchAllWeatherData();
        if (weatherData) {
            const summary = calculateDailySummary(weatherData);
            storeDailySummary(summary);
            checkThresholds(weatherData);
        }
        await new Promise(resolve => setTimeout(resolve, config.interval));
    }
}calculateDailySummary;

main().catch(console.error);
