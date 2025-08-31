import "../index.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from 'leaflet'
import Header from './Header'
import { useEffect, useState } from "react";
import useWeatherStore from "./stores/useWeatherStore"


function Map() {
    const [userLocation, setUserLocation] = useState(null)
    const fetchWeatherCoords = useWeatherStore((state) => state.fetchWeatherCoords)
    const weatherData = useWeatherStore((state) => state.weatherData)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation([position.coords.latitude, position.coords.longitude])
                fetchWeatherCoords(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
                alert(error.message)
                setUserLocation([9.05785, 7.49508])
            })
        } else {
            alert("Geolocation not supported by browser")
            setUserLocation([9.05785, 7.49508])
        }
    }, [fetchWeatherCoords])



    const customIcon = new Icon( {
        iconUrl: "https://cdn-icons-png.flaticon.com/128/12461/12461186.png",
        iconSize: [38, 38]
    })

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-[70px_1fr]">
        <div>

        <Header />
        </div>
        {userLocation ? (
    <MapContainer className="h-full md:rounded-r-lg md:rounded-l-none" center={userLocation} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

    <Marker position={userLocation} icon={customIcon} >
<Popup>
    {weatherData ? (
    <div className="p-3 rounded-lg shadow-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 w-40">
      <p className="font-bold text-base text-center">
        {weatherData.currentData.city_name}
      </p>
      <p className="text-2xl font-extrabold text-center mt-1">
        {Math.round(weatherData.currentData.temp)}&deg;C
      </p>
      <p className="text-sm text-center italic mt-1">
        {weatherData.currentData.weather.description}
      </p>
    </div>
  ) : (
    <span className="text-gray-400">Loading weather...</span>
  )}
</Popup>
    </Marker>
    </MapContainer>
): (
    <p className="text-white">Loading map...</p>
    )
}
</div>
  );
}
export default Map;
