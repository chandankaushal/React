import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_IMAGE_URL =
    "https://plus.unsplash.com/premium_photo-1669809948017-518b5d800d73?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="containerDiv">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={info.image || INIT_IMAGE_URL}
          title="City Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.delhi}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
          >
            <div>
              <b>{info.city}</b>
            </div>
            <div>Temperature = {info.temp}&deg;C</div>
            <div>Humidity = {info.humidity}</div>
            <div>Feels Like = {info.feels_like}&deg;C</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
