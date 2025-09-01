import useWeatherStore from "./stores/useWeatherStore";
import { NavLink } from "react-router-dom";
import Header from "./Header";
function SavedCitiesPage() {
  const savedCities = useWeatherStore((state) => state.savedCities);
  const removeCity = useWeatherStore((state) => state.removeCity);
  const clearCity = useWeatherStore((state) => state.clearCity);

  return (
    <div className="h-full grid grid-cols-1 md:grid-cols-[70px_1fr]">
      <Header />
      <div className="md:ml-10">
      <h1 className="text-2xl text-left mt-5 text-white font-bold mb-4">Saved Cities</h1>

      {savedCities.length === 0 ? (
        <p className="text-gray-500">No saved cities yet.</p>
      ) : (
        <ul>
          {savedCities.map((city, index) => (
            <li
              key={index}
              className="flex justify-between mt-5 items-center bg-gray-200 dark:bg-slate-700 dark:text-slate-200 p-3 rounded-lg"
            >
              <NavLink to={`/homepage?city=${city}`}>
  <span className="font-medium hover:underline">{city}</span>
</NavLink>
              <button
                onClick={() => removeCity(city)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {savedCities.length > 0 && (
        <button
          onClick={clearCity}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Clear All
        </button>
      )}
      </div>
    </div>
  );
}

export default SavedCitiesPage;
