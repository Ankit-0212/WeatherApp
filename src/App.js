import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/weatherapp/icons/sunny.svg",
  "01n": "/weatherapp/icons/night.svg",
  "02d": "/weatherapp/icons/day.svg",
  "02n": "/weatherapp/icons/cloudy-night.svg",
  "03d": "/weatherapp/icons/cloudy.svg",
  "03n": "/weatherapp/icons/cloudy.svg",
  "04d": "/weatherapp/icons/perfect-day.svg",
  "04n": "/weatherapp/icons/cloudy-night.svg",
  "09d": "/weatherapp/icons/rain.svg",
  "09n": "/weatherapp/icons/rain-night.svg",
  "10d": "/weatherapp/icons/rain.svg",
  "10n": "/weatherapp/icons/rain-night.svg",
  "11d": "/weatherapp/icons/storm.svg",
  "11n": "/weatherapp/icons/storm.svg",
};

const Container = styled.div`
background: rgba(255, 255, 255, 0.2) !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 80vh;
  padding: 20px 10px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container className="card">
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
