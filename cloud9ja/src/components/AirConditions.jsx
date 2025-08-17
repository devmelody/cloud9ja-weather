import "../index.css";
import useWeatherStore from "./stores/useWeatherStore";
import { Wind, Thermometer, Droplet, SunMedium } from "lucide-react";

function AirConditions() {
  const { weatherData } = useWeatherStore();

  if (
    !weatherData ||
    !weatherData.currentData ||
    !weatherData.dailyData ||
    !weatherData.dailyData[0]
  ) {
    return <p className="text-gray-400">Loading air conditions...</p>;
  }

  return (
    <section className="forecast-card">
      <h3 className="forecast-card-title">AIR CONDITIONS</h3>

      <div className="air-conditions-flexed gap-y-12">
        <div className="flex flex-col">
          <div className="flex text-left">
            <Thermometer size={28} className="text-slate-400 p-1" />
            <div>
              <h3 className="text-xs mt-1.5">Real Feel</h3>

              <p className="text-lg font-bold">
                {weatherData.currentData.app_temp}&deg;c
              </p>
            </div>
          </div>

          <div className="flex text-left">
            <Droplet size={28} className="text-slate-400 p-1" />
            <div>
              <h3 className="text-xs mt-1.5">Chance of Rain</h3>
              <p className="text-lg font-bold">
                {weatherData.dailyData[0].pop}%
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex text-left">
            <Wind size={28} className="text-slate-400 p-1" />
            <div>
              <h3 className="text-xs mt-1.5">Wind</h3>
              <p className="text-lg font-bold">
                {weatherData.currentData.wind_spd.toFixed(1)} km/h
              </p>
            </div>
          </div>

          <div className="flex text-left">
            <SunMedium size={28} className="text-slate-400 p-1" />
            <div>
              <h3 className="text-xs mt-1.5">UV Index</h3>
              <p className="text-lg font-bold">{weatherData.currentData.uv}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AirConditions;
