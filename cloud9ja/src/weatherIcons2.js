const weatherIcons2 = {
  0: "assets/sunny.svg",
  1: "assets/sunny.svg",
  2: "assets/partly-cloudy.svg",
  3: "assets/partly-cloudy.svg",
  45: "assets/partly-cloudy.svg",
  48: "assets/partly-cloudy.svg",
  51: "assets/light-drizzle.svg",
  53: "assets/rain.svg",
  55: "assets/rain.svg",
  56: "assets/sleet.svg",
  57: "assets/sleet.svg",
  61: "assets/light-drizzle.svg",
  63: "assets/rain.svg",
  65: "assets/rain.svg",
  66: "assets/sleet.svg",
  67: "assets/sleet.svg",
  71: "assets/snow.svg",
  73: "assets/snow.svg",
  75: "assets/snowfall.svg",
  77: "assets/snow.svg",
  80: "assets/light-drizzle.svg",
  81: "assets/rain.svg",
  82: "assets/rain.svg",
  85: "assets/snow.svg",
  86: "assets/snowfall.svg",
  95: "assets/thunderstorm.svg",
  96: "assets/thunderstorm.svg",
  99: "assets/thunderstorm.svg",
};

export default function getWeatherIcon2(code) {
  return weatherIcons2[code] || "/assets/default.svg";
}
