// mockWeatherData.js
const mockWeatherData = {
  cityName: "Abuja",
  currentData: {
    city_name: "Abuja",
    temp: 28.4,
    app_temp: 30.1,
    wind_spd: 3.6,
    uv: 6.2,
    precip: 0.5,
    weather: {
      description: "Clear sky",
      icon: "c01d"
    }
  },
  hourlyData: [
    {
      timestamp_local: "2025-08-10T10:00:00",
      temp: 28,
      pop: 0,
      weather: { description: "Clear sky", icon: "c01d" }
    },
    {
      timestamp_local: "2025-08-10T11:00:00",
      temp: 29,
      pop: 5,
      weather: { description: "Few clouds", icon: "c02d" }
    }
    // ...add more hours as needed
  ],
  dailyData: [
    {
      valid_date: "2025-08-10",
      temp: 28,
      pop: 10,
      weather: { description: "Clear sky", icon: "c01d" }
    },
    {
      valid_date: "2025-08-11",
      temp: 29,
      pop: 20,
      weather: { description: "Scattered clouds", icon: "c02d" }
    },
    {
      valid_date: "2025-08-12",
      temp: 27,
      pop: 40,
      weather: { description: "Light rain", icon: "r01d" }
    }
    // ... up to 7 days if needed
  ]
};

export default mockWeatherData;
