import "../index.css";
import useWeatherStore from "./stores/useWeatherStore";

function Search() {
  const {searchCity, setSearchCity, fetchWeatherData} = useWeatherStore();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (searchCity.trim() !== "") {
    fetchWeatherData(searchCity)
  }
  //debugging
  console.log('Hello');
}



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for cities..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className="p-1.5 mt-3 md:mt-0 container rounded-lg border-slate-800 text-slate-600 dark:text-white dark:bg-slate-800 bg-slate-200 font-medium text-base md:font-bold md:py-3"
      />
    </form>
  );
}
export default Search;
