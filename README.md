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
Design Choices-

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
Dependencies
Node.js: JavaScript runtime for building and running the application.
Axios: For making HTTP requests to the OpenWeatherMap API.
Express.js: Web framework for serving weather summaries.


Setup and Running the Application
Prerequisites
Docker and Docker Compose (for containerized setup)
Node.js (for local development)

Docker Setup
Build and Run the Containers

```
docker-compose up --build
```
Access the Application

Weather Monitoring Service: http://localhost:3000/weather-summary
The application runs in a Docker container, which will automatically fetch and process weather data at the configured interval.
Local Development

Clone the Repository

```
git clone https://github.com/your-username/weather-monitoring.git
cd weather-monitoring
```

Install Dependencies
```
npm install
```
Create a Configuration File

Copy config.js.example to config.js and replace 'YOUR_API_KEY_HERE' with your OpenWeatherMap API key.

```
cp config.js.example config.js

```

Run the Application 
```
node app.js
```

Access the Visualization Server

If you want to access the weather summary visualization, run:
```
node visualization.js
```

eather Summary Endpoint: http://localhost:3000/weather-summary

Build Instructions
Dockerfile: Contains instructions for building the Docker image for the application.
docker-compose.yml: Defines services for running the application and visualization server.
Configuration
config.js: Contains settings such as API key, cities, interval for API calls, temperature thresholds, and alert duration.
Testing
System Setup:

Verify the application starts and connects to the OpenWeatherMap API using a valid API key.
Data Retrieval:

Simulate API calls and ensure correct data retrieval and parsing.
Temperature Conversion:

Test the conversion of temperatures from Kelvin to Celsius or Fahrenheit.
Daily Weather Summary:

Simulate weather updates and verify the accuracy of daily summaries.
Alerting Thresholds:

Test alerting mechanisms for temperature thresholds and verify correct alert triggers.







