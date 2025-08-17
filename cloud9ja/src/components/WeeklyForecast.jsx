import "../index.css";
import useWeatherStore from "./stores/useWeatherStore";



function WeeklyForecast() {
const {weatherData} = useWeatherStore();

   if (
    !weatherData ||
    !weatherData.dailyData
  ) {
    return <p className="text-gray-400">Loading weather data...</p>;
  }

  return (
    <section className="forecast-card md:mt-20">
      <h3 className="forecast-card-title">7-DAY FORECAST</h3>

      <div>
        {weatherData.dailyData.map((day, index) => (

        <div key={index} className="flex gap-5 items-start justify-between border-b-2 border-b-gray-600 mt-5">
          <p>{new Date(day.valid_date).toLocaleDateString("en-US", { weekday: "short" })}</p>
          <div className="flex">
            <img
              src="/assets/main-weather.svg"
              alt="weather-condition"
              className="w-8 h-7 block border-white-600"
            />
            <p>Sunny</p>
          </div>
          <p>{Math.round(day.max_temp)}&deg;/{Math.round(day.min_temp)}&deg;</p>
        </div>
        ))}
      </div>
    </section>
  );
}
export default WeeklyForecast;
