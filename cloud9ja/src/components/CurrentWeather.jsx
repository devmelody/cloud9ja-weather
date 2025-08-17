import "../index.css";
import { useEffect } from "react";
import useWeatherStore from "./stores/useWeatherStore";

function CurrentWeather() {
  const { weatherData, error, fetchWeatherData } = useWeatherStore();

  //Show default city when user first opens page
  useEffect(() => {
    fetchWeatherData("Abuja");
  }, []);

  if (error) return <p className="text-gray-400">{error}</p>;

    if (
    !weatherData ||
    !weatherData.currentData ||
    !weatherData.dailyData ||
    !weatherData.dailyData[0]
  ) {
    return <p className="text-gray-400">Loading weather data...</p>;
  }



  return (
    <section className="flex justify-between items-center w-full">
      <div className="flex flex-col items-start justify-between gap-6">
        <div className="flex flex-col text-white items-start">
          <h2 className="font-bold text-2xl">{weatherData.cityName}</h2>
          <p className="text-xs">Chance of rain: {weatherData.dailyData[0].pop}%</p>
        </div>

        <div className=" items-start">
          <h1 className="text-5xl font-bold text-white mt-1">
            {weatherData.currentData.temp.toFixed(0)}&deg;
            <span className="text-3xl font-bold">c</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          src="/assets/sun-icon.svg"
          alt="current-weather"
          className="size-40 animate-pulse"
        />
      </div>
    </section>
  );
}
export default CurrentWeather;

{/*import { create } from "zustand";
import axios from "axios";


const API_KEY = "eec843df6ac74cc199a247dad033cb09";

const useWeatherStore = create((set) => ({
  searchCity: "",
  setSearchCity: (city) => set({ searchCity: city }),
  weatherData: null,
  error: null,

  fetchWeatherData: async (city) => {
    try {
      //current weather data request
      const currentResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`
      );

      //hourly weather data request
      const hourlyResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&key=${API_KEY}&hours=6`
      )

      //daily weather data request
      const dailyResponse = await axios.get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${API_KEY}&days=7`
      )

      set({
         weatherData: {
          cityName: currentResponse.data.data[0].city_name,
          currentData: currentResponse.data.data[0],
          hourlyData: hourlyResponse.data.data,
          dailyData: dailyResponse.data.data,
        },
        error: null,
        
      });
    } catch (err) {
      set({ error: "Error fetching weather", weatherData: null });
      console.error(err);
    }
  },
}));

export default useWeatherStore;
*/}
