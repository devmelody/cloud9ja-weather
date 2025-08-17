
import Landingpage from './Landingpage'
import Header from './Header'
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import HourlyForecast from './HourlyForecast'
import AirConditions from './AirConditions'
import WeeklyForecast from './WeeklyForecast'
import { Routes, Route } from 'react-router-dom'

function HomePage() {
  return (

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
  )
}
export default HomePage;