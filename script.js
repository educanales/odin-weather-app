const inputLocation = document.getElementById("search-location");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let location = inputLocation.value;
  inputLocation.value = "";
  displayData(location);
});

async function getData(location) {
  const API_KEY = "BP242W9Z9DZAZ4TKRAWX6CTA7";

  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=${API_KEY}&contentType=json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function processData(location) {
  const data = await getData(location);
  const weatherData = [{
    address : data.resolvedAddress,
    temp : Math.round(data.currentConditions.temp),
    description : data.description,
    icon: data.days[0].icon,
  }]
  return weatherData;
}

async function displayData(location) {
  const weatherData = await processData(location);
  const weatherLocation = document.querySelector(".weather-location");
  const weatherTemp = document.querySelector(".weather-temp");
  const weatherDescription = document.querySelector(".weather-description");

  weatherLocation.textContent = `${weatherData[0].address}`;
  weatherTemp.textContent = `${weatherData[0].temp}ºC`;
  weatherDescription.textContent = `${weatherData[0].description}`;

  console.log(weatherData[0].address);
  console.log(weatherData[0].temp);
  console.log(weatherData[0].description);
  console.log(weatherData[0].icon);
}

displayData("Pudahuel");