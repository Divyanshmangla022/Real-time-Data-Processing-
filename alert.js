// alert.js
const config = require('./config');

let consecutiveAlertCount = 0;

function checkThresholds(weatherData) {
    let alertTriggered = false;

    for (const city in weatherData) {
        const tempCelsius = kelvinToCelsius(weatherData[city].main.temp);
        if (tempCelsius > config.tempThreshold) {
            consecutiveAlertCount++;
            if (consecutiveAlertCount >= config.alertDuration) {
                console.log(`Alert: Temperature in ${city} exceeded ${config.tempThreshold}°C for ${config.alertDuration} consecutive updates.`);
                alertTriggered = true;
            }
        } else {
            consecutiveAlertCount = 0;
        }
    }

    return alertTriggered;
}

module.exports = { checkThresholds };
