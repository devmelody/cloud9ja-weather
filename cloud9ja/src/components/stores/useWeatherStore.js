import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHERBIT_KEY;
const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

const useWeatherStore = create((set) => ({
  searchCity: "",
  setSearchCity: (city) => set({ searchCity: city }),
  toggle: "light",
  setToggle: (state) => set({toggle: state.toggle === "light" ? "dark" : "light"}),
  weatherData: null,
  error: null,

  fetchWeatherData: async (city) => {
    try {
      //current weather data request
      const currentResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
      );

      //hourly weather data request

      //coordinates from openweather

      const coordinates = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_KEY}`
      );

      //getting lat and lon to be used to access the open-meteo API

      const lon = coordinates.data.coord.lon;
      const lat = coordinates.data.coord.lat;

      const hourlyResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code`
      );

      //daily weather data request
      const dailyResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}&days=7`
      );

      set({
        weatherData: {
          cityName: currentResponse.data.data[0].city_name,
          currentData: currentResponse.data.data[0],
          hourlyData: hourlyResponse.data.hourly,
          dailyData: dailyResponse.data.data,
        },
        error: null,
      });
    } catch (err) {
      set({ error: "Error fetching weather", weatherData: null });
      console.error(err);
    }
  },

  //fetching weather by coordinates for the geolocation map
  //it accepts coords and not city name

  fetchWeatherCoords: async (lat, lon) => {
    try {
      //current weather from weatherbit
      const currentResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${API_KEY}`
      );

      //hourly weather from open-meteo
      const hourlyResponse = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code`
      );

      //daily weather from weatherbit
      const dailyResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${API_KEY}&days=7`
      );

      set({
        weatherData: {
          cityName: currentResponse.data.data[0].city_name,
          currentData: currentResponse.data.data[0],
          hourlyData: hourlyResponse.data.hourly,
          dailyData: dailyResponse.data.data,
        },
        error: null,
      });
    } catch (err) {
      set({ error: "Error fetching weather by location", weatherData: null });
      console.error(err);
    }
  },
}));

export default useWeatherStore;
