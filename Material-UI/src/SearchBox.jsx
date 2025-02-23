import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");
  let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  let API_KEY = "50127ef28a9d36f0ab26b7d1781e1a11";
  let API_URL2 = "https://api.openweathermap.org/data/2.5/weather";

  async function ApiCall(city) {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    //console.log(jsonResponse);
    let { lat, lon } = jsonResponse[0];

    let res = await fetch(
      `${API_URL2}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    let json = await res.json();

    let weather = {
      temp: json.main.temp,
      temp_min: json.main.temp_min,
      temp_max: json.main.temp_max,
      humidity: json.main.humidity,
      feels_like: json.main.feels_like,
    };

    console.log(weather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    ApiCall(city);
    setCity("");
  }

  return (
    <>
      <div className="SearchBoxDiv">
        <h3>Weather</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="City"
            label="City"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <br></br>
          <br></br>
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
