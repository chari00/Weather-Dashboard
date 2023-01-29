let APIKey = "75bfc21db16c1c30eefe952a9b9be736";
let searchInput = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-button");
let inputContainer = document.querySelector(".input-group");
let today = document.querySelector("#today");
let forecast = document.querySelector("#forecast");
let searchBtnParent = document.querySelector(".input-group-append");
let cityArr = [];
//let localStorageIndex = 0;

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // cityHistory.innerHTML = "";
  event.target.textContext;
  let city = searchInput.value;
  var localStorageIndex = JSON.parse(localStorage.getItem("history"));
  var localStoragelength = 0;

  if (localStorageIndex != null) {
    var localStoragelength = localStorageIndex.length;
  }

  if (localStoragelength < 5) {
    //console.log("Index = " + localStorageIndex);
    console.log("Length" + localStoragelength);
    cityArr[localStoragelength] = city;
  } else {
    //reorder and replace localstorage items
    // for i = length - 1; i = 1 ; i--
    // get item 3 and copy to 4.. repeat until 0 is copied to 1
    // loop
    //

    cityArr[0] = city;
  }

  let queryURLCity =
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=` +
    APIKey;
  // console.log(queryURLCity);

  setLocalStorage(cityArr);
  getCityWeather(queryURLCity);
  populateHistory();
});

function getCityWeather(queryURLCity) {
  fetch(queryURLCity)
    .then((response) => response.json())
    .then((citiesFound) => {
      let firstCity = citiesFound[0];
      let queryURLLatLon =
        `https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=` +
        APIKey;
      // console.log(firstCity.lat);
      // console.log(firstCity.lon);
      return fetch(queryURLLatLon);
    })
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(weatherData);
      weatherHead(weatherData);
    });
}
//function to get the weather info for current city on  search.
// * Create a weather dashboard with form inputs.
//   * When a user views the current weather conditions for that city they are presented with:
//    * The city name,date,icon representation of weather conditions,temperature,
//     humidity, wind speed

// get the city in the user input  to display innerHTML  as the head city in dashboard

function setLocalStorage(cityIn) {
  localStorage.setItem("history", JSON.stringify(cityIn));
}

function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem("history"));
}
// populate the search history and diplay it to the left side of the page.
function populateHistory() {
  let listEl = document.querySelector("#history");
  for (let i = 0; i < listEl.length; i++) {
    // let cityInHistory = JSON.parse(localStorage.getItem("history"));

    history.innerHTML = history;
  }
}

function weatherHead(weatherData) {
  let headCityName = weatherData.city.name;
  let weatherIcon = weatherData.list[0].weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  const celsiusTemp = weatherData.list[0].main.temp - 273.15;
  // console.log(headCityName);
  // console.log(celsiusTemp);

  let currentCityWeather = `<h2>
  ${headCityName}(${moment(weatherData.dt).format(
    "DD/MM/YYYY"
  )}) <img src=${iconUrl}
  </h2>
    <p>Temp:  ${Math.floor(celsiusTemp)} &#8451</p>
    <p>Wind: ${weatherData.list[0].wind.speed} KPH</p>
  <p>Humidity: ${weatherData.list[0].main.humidity}%</p>`;

  today.innerHTML = currentCityWeather;
  // console.log(currentCityWeather);
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
