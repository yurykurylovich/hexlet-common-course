import axios from "axios";

const apiUrl = 'http://localhost:8080/api/v2/';

class WeatherService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async getTemperature(cityName) {
    const url = new URL(`cities/${cityName}`, apiUrl);
    const responce = await this.httpClient.get(url.toString());
    return JSON.parse(responce.data);
  }
}

export default WeatherService;
