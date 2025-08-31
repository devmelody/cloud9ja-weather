import "../index.css";
import useWeatherStore from "./stores/useWeatherStore";
import getWeatherIcon2 from "../weatherIcons2";

function HourlyForecast() {
  const { weatherData } = useWeatherStore();

  if (!weatherData || !weatherData.hourlyData) {
    return <p className="text-gray-400">Loading hourly data...</p>;
  }
  
  const hoursToDisplay = weatherData.hourlyData.time.slice(0, 6);
  const tempsToDisplay =weatherData.hourlyData.temperature_2m.slice(0, 6);
  const codesToDisplay = weatherData.hourlyData.weather_code.slice(0, 6);
  


  return (
    <section className="forecast-card h-full">
      <h3 className="forecast-card-title md:mt-2">TODAY'S FORECAST </h3>

      <div className="flex gap-3 justify-between mt-1 overflow-x-auto snap-x snap-mandatory">
        {hoursToDisplay.map((hour, index) => (
          <div key={index} className="flex flex-col items-center gap-0 md:mt-4">
            <p className="text-xs font-semibold ">{new Date(hour).toLocaleTimeString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  })}</p>
            <img
              src={getWeatherIcon2(codesToDisplay[index])}
              alt='weather-icon'
              className="w-10 h-10 block border-white-600 "
            />
            <p className="text-xs font-bold dark:text-white">{tempsToDisplay[index].toFixed()}&deg;c</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default HourlyForecast;
