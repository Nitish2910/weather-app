const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6eb2f74839268cc54884a6b2287ceea0&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Feels like " +
          body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degress out and the humidity level is " +
          body.current.humidity +
          "."
      );
    }
  });
};

module.exports = forecast;
