import React, { useEffect, useState } from "react";
import { weatherByCity, weatherByLocation } from "./api/weatherApis";

export default function  Weather (){
  //city usestate for input field
  const [city, setCity] = useState("");
  //for save weather data
  const [weather, setWeather] = useState(null);

  //for input handle change feild  we can write any thinng
  const handleSearch = (event) => {
    setCity(event.target.value);
  };
  //for button click
  const handleClick = async () => {
    //it fectch the wether
    const data = await weatherByCity(city);
    setWeather(data);
  };

  useEffect(() => {
    async function fetch() {
      const data = await weatherByLocation();
      setWeather(data);
    }

    fetch();
  }, []);

  return (
    <div className=" weather-container">
      <input
        type="text"
        placeholder="Enter your City Name"
        value={city}
        onChange={handleSearch}
      />
      <button className="weather-info " onClick={handleClick}>
        Get weather Information
      </button>
      {weather && (
        <>
          <div>
            <h1>{weather.name}</h1>
            <h2>temprature:{weather.main.temp}°C </h2>
            <p>{weather.weather[0].description}</p>
          </div>
        </>
      )}
    </div>
  );
};

