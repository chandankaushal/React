import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState({flag: false, message: ""});

  let weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL;
  let weatherApiKey = import.meta.env.VITE_API_KEY;
  let weatherApiUrl2 = import.meta.env.VITE_API_URL2;

  if (!weatherApiUrl || !weatherApiKey || !weatherApiUrl2) {
    setError({flag: true, message: "Please provide the API URL and API Key in .env file"});
    throw new Error("Please Check if you are passing the correct API URL and API Key");
  }

  async function ApiCall(city) {
   
    try {
      let response = await fetch(
        `${weatherApiUrl}?q=${city}&appid=${weatherApiKey}`
      );
      let jsonResponse = await response.json();

      let { lat, lon } = jsonResponse[0];

      let res = await fetch(
        `${weatherApiUrl2}?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
      );
      
      let json = await res.json();
    

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
    try{  
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();
      let imageURL = jsonResponse.results[0].urls.small;
      return imageURL;
    }
      catch(err){
        setError({flag: true, message: "Failed to Fetch Image"});
      }
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
      setError({flag: true, message: "Failed to Fetch Weather Information"});
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
            {error.flag == true && (
              <b>
                <p style={{ color: "red" }}>{error.message}</p>
              </b>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
