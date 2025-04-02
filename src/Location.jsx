import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const CurrentLocationWeather = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
     
    }, []);

    return (
        <div className="location-weather-container">
            <h2>Today's weather</h2>
            {error ? <p>{error}</p> : weather ? (
                <div>
                    <h3>{weather.name}</h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Fetching weather data...</p>
            )}
        </div>
    );
};

export default CurrentLocationWeather;
