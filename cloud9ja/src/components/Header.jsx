import "../index.css";
import { Wind, CloudSunRain, List, Map, SlidersHorizontal } from "lucide-react";
import useWeatherStore from "./stores/useWeatherStore";
import { NavLink } from "react-router-dom";


function Header() {
const fetchWeatherCoords = useWeatherStore((state) => state.fetchWeatherCoords)

  //getting geolocation
  function handleGetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  fetchWeatherCoords(latitude, longitude)
      },
    (error) => {
      console.error("Error getting location", error);
    }
    )
    }else {
      alert("Geolocation is not supported by this browser")
    }
  };

  return (
    <header>
      <nav className="flex md:flex-col md:justify-start md:pb-40 items-center justify-between sticky top-0 rounded-2xl z-50 bg-slate-700 
      md:min-h-screen p-2">
        
        <NavLink to='/' className="nav-buttons hover:animate-spin md:mt-3">
          <Wind size={32} className="text-slate-400  rounded-md bg-gray-600 p-1" />
        </NavLink>

        <div className="flex items-center justify-around md:flex-col md:mt-10 gap-5">
          <NavLink to='/homepage' className="flex flex-col items-center nav-buttons">
            <CloudSunRain size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs text-slate-400 mb-0">Weather</p>
          </NavLink>

          <button onClick={handleGetLocation} className="flex flex-col items-center nav-buttons">
            <List size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">Cities</p>
          </button>

          <NavLink to ='/homepage/map' className="flex flex-col items-center nav-buttons">
            <Map size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">Map</p>
          </NavLink>

          <button className="flex flex-col items-center nav-buttons">
            <SlidersHorizontal size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">Settings</p>
          </button>
          
        </div>
      </nav>
    </header>
  );
}
export default Header;
