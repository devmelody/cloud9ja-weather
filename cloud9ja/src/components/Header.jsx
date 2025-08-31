import "../index.css";
import {
  Wind,
  CloudSunRain,
  Map,
  Heart,
  LightbulbIcon,
  SlidersHorizontal
} from "lucide-react";
import useWeatherStore from "./stores/useWeatherStore";
import { NavLink } from "react-router-dom";

function Header() {
  const toggle = useWeatherStore((state) => state.toggle);
  const setToggle = useWeatherStore((state) => state.setToggle);
  const addCity = useWeatherStore((state) => state.addCity);
  const savedCities = useWeatherStore((state) => state.savedCities)



  function handleAddCity() {
  addCity();
  //debugging
  console.log('Saved cities:',savedCities)
  }
  return (
    <header className="h-full">
      <nav
        className="flex bg-gray-200 md:flex-col md:justify-start md:pb-40 items-center justify-between top-0 rounded-2xl z-50 dark:bg-slate-700
       p-2"
      >
        <NavLink to="/" className="nav-buttons hover:animate-spin md:mt-3">
          <Wind
            size={32}
            className="text-slate-400  rounded-md bg-gray-600 p-1"
          />
        </NavLink>

        <div className="flex items-center justify-around md:flex-col md:mt-10 gap-5">
          <NavLink
            to="/homepage"
            className="flex flex-col items-center nav-buttons"
          >
            <CloudSunRain size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs text-slate-400 mb-0">
              Weather
            </p>
          </NavLink>

          <NavLink
            to="/homepage/map"
            className="flex flex-col items-center nav-buttons"
          >
            <Map size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">Map</p>
          </NavLink>

          <button
            onClick={handleAddCity}
            className="flex flex-col items-center nav-buttons"
          >
            <Heart size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">
              Add City
            </p>
          </button>

          <NavLink to={"/homepage/cities"}
            className="flex flex-col items-center nav-buttons"
          >
            <SlidersHorizontal size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">
              Cities
            </p>
          </NavLink>


          <button
            onClick={setToggle}
            className="flex flex-col items-center nav-buttons"
          >
            <LightbulbIcon size={32} className="text-slate-400 p-1" />
            <p className="hidden md:block text-xs mb-0 text-slate-400">
              {toggle === "dark" ? "Light mode" : "Dark mode"}
            </p>
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
