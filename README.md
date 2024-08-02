# Real-time-Data-Processing-
 Real-Time Data Processing System for Weather Monitoring with Rollups and Aggregates
 
This project is a real-time weather monitoring system that retrieves weather data from the OpenWeatherMap API, processes it, provides daily summaries, and triggers alerts based on configurable thresholds. The application uses Node.js and JavaScript.
```
weather-monitoring/
├── config.js
├── weather.js
├── utils.js
├── summary.js
├── alert.js
├── app.js
├── visualization.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```
#Design Choices-

API Integration:

Uses OpenWeatherMap API to fetch weather data for cities in India.
Configurable API call interval (default: every 5 minutes).
Data Processing:

Converts temperature from Kelvin to Celsius.
Aggregates daily weather data: average, maximum, minimum temperatures, and dominant weather condition.
Alerting:

Monitors temperature thresholds and triggers alerts if the threshold is breached for a specified duration.
Visualization:

Provides an endpoint to view weather summaries through a simple Express.js server.


