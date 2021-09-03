import WeatherService from "../WeatherService.js";
import axios from "axios";

const weather = new WeatherService(axios);
const cityName = process.argv[2];

weather.getTemperature(cityName).then((data) => {
  const message = `Temperature in ${data.name}: ${data.temperature}C`;
  console.log(message);
})
