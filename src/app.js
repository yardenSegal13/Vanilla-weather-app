function displayTemp(response) {
  console.log(response.data);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = response.data.temperature.humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "e8d0t21311e4ab493b99bo9d8480dbcf";
let unit = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=new york&key=${apiKey}&units=${unit}`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemp);
