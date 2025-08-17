import './App.css'
import Landingpage from './components/Landingpage'
import Header from './components/Header'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import AirConditions from './components/AirConditions'
import WeeklyForecast from './components/WeeklyForecast'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/homepage' element={<HomePage />} />
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
      
    </>
  )
}

export default App
