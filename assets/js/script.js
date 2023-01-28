let APIKey = "75bfc21db16c1c30eefe952a9b9be736";
let searchInput = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-button");
let inputContainer = document.querySelector(".input-group");
let today = document.querySelector("#today");
let forecast = document.querySelector("#forecast");
let searchBtnParent = document.querySelector(".input-group-append");
let cityHistory = document.querySelector("#history");
//let city = searchInput.value;

// let queryURLCity =
//   `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=` +
//   APIKey;

let cities = [];
// create event listener to searchBtn
// use event deligation to pull out the string from the button use '(event.target.textContent)'

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  cityHistory.innerHTML = "";
  // if (event.target.matches("button")) {
  //   searchForm.append(searchBtnParent);
  event.target.textContext;
  let city = searchInput.value;
  let queryURLCityIn =
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=` +
    APIKey;
  console.log(queryURLCityIn);
  //let weatherDataIn = getCityWeather(queryURLCityIn);
  getCityWeather(queryURLCityIn);
  //console.log(weatherDataIn);
  //cityWeatherHead();
  // }
});

function getCityWeather(queryURLCity) {
  console.log("in getcityweather");
  fetch(queryURLCity)
    .then((response) => response.json())
    .then((citiesFound) => {
      let firstCity = citiesFound[0];
      let queryURLLatLon =
        `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=` +
        APIKey;
      console.log(firstCity.lat);
      console.log(firstCity.lon);
      return fetch(queryURLLatLon);
    })
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData);
      cityWeatherHead(weatherData);
    });
  //return fetch(queryURLLatLon);
}
//function to get the weather info for current city on  search.
// * Create a weather dashboard with form inputs.
//   * When a user views the current weather conditions for that city they are presented with:
//    * The city name,date,icon representation of weather conditions,temperature,
//     humidity, wind speed

// Set function to get the city in the user input  to display innerHTML  as the head city

function cityWeatherHead(weatherData) {
  console.log("in cityWeatherHead");
  let headCityName = weatherData.city.name;
  let weatherIcon = weatherData.list[0].weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  console.log(headCityName);

  let currentCityWeather = `  <h2>
  ${headCityName}(${moment(weatherData.dt).format(
    "DD/MM/YYYY"
  )}) <img src=${iconUrl}
  </h2>
  <p>Temp</p>
  <p>Wind</p>
  <p>Humidity</p>`;
  console.log(currentCityWeather);
  today.innerHTML = currentCityWeather;
}
//   * When a user searches for a city they are presented with current and future
//conditions for that city and that city is added to the search history
//   * When a user view future weather conditions for that city they are
//presented with a 5-day forecast that displays:
//     * The date,icon representation of weather conditions,temperature,humidity

//   * When a user click on a city in the search history they are again
//presented with current and future conditions for that city
//persit data to local storage to get items when user clicked
//a city name in search history
