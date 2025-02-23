import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL;
  let weatherApiKey = import.meta.env.VITE_API_KEY;
  let weatherApiUrl2 = import.meta.env.VITE_API_URL2;
  async function ApiCall(city) {
    //console.log(`This is calling ${weatherApiUrl2}`);
    try {
      let response = await fetch(
        `${weatherApiUrl}?q=${city}&appid=${weatherApiKey}`
      );
      let jsonResponse = await response.json();

      let { lat, lon } = jsonResponse[0];
      console.log(
        `${weatherApiUrl2}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
      );
      let res = await fetch(
        `${weatherApiUrl2}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
      );
      console.log(res);
      let json = await res.json();
      console.log(`This is ${json}`);

      let imageURL = await GetImageforCity(city);

      let weather = {
        city: city,
        temp: json.main.temp,
        temp_min: json.main.temp_min,
        temp_max: json.main.temp_max,
        humidity: json.main.humidity,
        feels_like: json.main.feels_like,
        image: imageURL,
      };

      return weather;
    } catch (err) {
      throw err;
    }
  }

  async function GetImageforCity(city) {
    let accessToken = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
    let url = import.meta.env.VITE_APP_UNSPLASH_URL;
    let apiUrl = `${url}?client_id=${accessToken}&query=${city}`;

    let response = await fetch(apiUrl);
    let jsonResponse = await response.json();

    let imageURL = jsonResponse.results[0].urls.small;
    return imageURL;
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let newInfo = await ApiCall(city);
      setCity("");
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <div className="SearchBoxDiv">
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
          <div className="SearchBoxButton">
            <Button variant="contained" type="submit">
              Search
            </Button>
            {error && (
              <b>
                <p style={{ color: "red" }}>No such Place exist in our API</p>
              </b>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
