import React from "react";
import { useEffect, useState } from "react";

const CurrLoc = (props) => {
  //   console.log(props);
  let v = 0;
  //   if (props.lat !== undefined) v = 1;
  //   useEffect(() => {
  //     fetchWeather();
  //   }, []);

  //   const [cuurrWeatherData, setCurrWeatherData] = useState(null);
  //   let fetchWeather = async () => {
  //     await fetch(
  //       // "https://api.openweathermap.org/data/2.5/weather?q=London&limit=5&appid=" +
  //       //   apiKey
  //       // "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=c1fe8e7c31b1a782fa503f0973afe60b"
  //       "https://api.openweathermap.org/data/2.5/weather?lat=" +
  //         props.lat +
  //         "&lon=" +
  //         props.lon +
  //         "&appid=c1fe8e7c31b1a782fa503f0973afe60b"
  //       // "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=eec90fb4a0b54f4444192b7f582ed1e8"
  //     )
  //       .then((data) => data.json())
  //       .then((jsonData) => {
  //         // console.log(data);
  //         if (jsonData == "Not Found") {
  //           alert("User not found");
  //           console.log("user not found");
  //           return;
  //         } else {
  //           console.log(jsonData);
  //           setCurrWeatherData(jsonData);
  //         }
  //       });
  //   };
  return <div>{props.lon}</div>;
};

export default CurrLoc;
