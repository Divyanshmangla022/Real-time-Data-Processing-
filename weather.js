// weather.js
const axios = require('axios');
const config = require('./config');

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKey}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        return null;
    }
}

async function fetchAllWeatherData() {
    const weatherData = {};
    for (const city of config.cities) {
        const data = await fetchWeather(city);
        if (data) {
            weatherData[city] = data;
        }
    }
    return weatherData;
}

module.exports = { fetchAllWeatherData };
