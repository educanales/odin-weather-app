// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${API_KEY}

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
    temp : data.currentConditions.temp,
    description : data.description,
    icon: data.days[0].icon,
  }]
  // console.log(weatherData);
  console.log(weatherData[0].address);
  console.log(weatherData[0].temp);
  console.log(weatherData[0].description);
  console.log(weatherData[0].icon);
}

function displayData() {
  
}

processData("Pudahuel");