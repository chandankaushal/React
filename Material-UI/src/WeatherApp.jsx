import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 26.03,
    humidity: 61,
    temp: 26.03,
    temp_max: 26.03,
    temp_min: 26.03,
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2> Weather App</h2>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
      </div>
    </>
  );
}
