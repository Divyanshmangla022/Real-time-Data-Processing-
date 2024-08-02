// summary.js
const { kelvinToCelsius } = require('./utils');
const weatherDataStore = []; // In-memory store for simplicity, replace with a database for production

function calculateDailySummary(weatherData) {
    const summary = {
        date: new Date().toISOString().split('T')[0],
        tempSum: 0,
        tempCount: 0,
        tempMax: -Infinity,
        tempMin: Infinity,
        weatherCount: {}
    };

    for (const city in weatherData) {
        const data = weatherData[city];
        const temp = kelvinToCelsius(data.main.temp);
        summary.tempSum += temp;
        summary.tempCount++;
        if (temp > summary.tempMax) summary.tempMax = temp;
        if (temp < summary.tempMin) summary.tempMin = temp;

        const weatherMain = data.weather[0].main;
        if (!summary.weatherCount[weatherMain]) {
            summary.weatherCount[weatherMain] = 0;
        }
        summary.weatherCount[weatherMain]++;
    }

    summary.tempAvg = summary.tempSum / summary.tempCount;
    summary.dominantWeather = Object.keys(summary.weatherCount).reduce((a, b) => summary.weatherCount[a] > summary.weatherCount[b] ? a : b);

    return summary;
}

function storeDailySummary(summary) {
    weatherDataStore.push(summary);
}

module.exports = { calculateDailySummary, storeDailySummary };
