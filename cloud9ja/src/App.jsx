import './App.css'
import Landingpage from './components/Landingpage'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Map from './components/Map'
import Cities from './components/Cities'
import useWeatherStore from './components/stores/useWeatherStore'
import { useEffect } from 'react'
function App() {
const toggle = useWeatherStore((state) => state.toggle)
useEffect(() => {
    if (toggle === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);
  return (
    <div className='min-h-screen'>
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/homepage' element={<HomePage />} />
      <Route path='/homepage/map' element={<Map />} />
      <Route path='/homepage/cities' element={<Cities />} />
    </Routes>
 




    {/**
     * 
    <main className='container grid grid-cols-1 md:grid-cols-[70px_1fr_250px] gap-4'>
      <aside className='md:flex flex-col'>
      <Header />
      </aside>

      <section className='flex flex-col gap-4'>
      <Search />
      <CurrentWeather />
      <HourlyForecast />
      <AirConditions />
      </section>

      <aside>
      <WeeklyForecast />
      </aside>
    </main>
     */}
      
    </div>
  )
}

export default App
