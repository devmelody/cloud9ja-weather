import "../index.css";
import useWeatherStore from "./stores/useWeatherStore";

function Search() {
  const {searchCity, setSearchCity, fetchWeatherData} = useWeatherStore();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (searchCity.trim() !== "") {
    fetchWeatherData(searchCity)
  }
  console.log('Hello');
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for cities..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        className="p-1.5 mt-3 md:mt-0 container rounded-lg text-white bg-slate-800 font-medium text-xs md:font-bold md:py-3"
      />
    </form>
  );
}
export default Search;
