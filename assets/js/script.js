let APIKey = "75bfc21db16c1c30eefe952a9b9be736";
let searchInput = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-button");
let inputContainer = document.querySelector(".input-group");
let today = document.querySelector("#today");
let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
let day5 = document.querySelector("#day5");
let forecast = document.querySelector("#forecast");
let searchBtnParent = document.querySelector(".input-group-append");
let searchHistory = document.querySelector("#search-history");
let cityArr = [];
//let localStorageIndex = 0;

let localStoragelength = 0;
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // cityHistory.innerHTML = "";
  event.target.textContext;
  let city = searchInput.value;
  let localStorageIndex = JSON.parse(localStorage.getItem("history"));

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
  nextWeather(queryURLCity);
  populateHistory();
  getFromLocalStorage();
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
      // console.log(weatherData.list[5].weather[0].icon);
      nextWeather(weatherData);
      weatherHead(weatherData);
      console.log(weatherData);
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
  console.log(localStorage.getItem("history"));
  var history = localStorage.getItem("history");
  searchHistory.textContent = history;
  return JSON.parse(localStorage.getItem("history"));
}

function weatherHead(weatherData) {
  let headCityName = weatherData.city.name;
  let weatherIcon = weatherData.list[0].weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
  let celsiusTemp = weatherData.list[0].main.temp - 273.15;
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
function nextWeather(weatherData) {
  let nextDay = moment(1675231200, "X").format("DD / MM / YYYY hh:mm");
  let dataWeather = weatherData.list[5].weather[0].icon;
  let icon1 = `https://openweathermap.org/img/wn/${dataWeather}@2x.png`;
  let nextTemp = Math.floor(weatherData.list[5].main.temp - 273.15);

  console.log("date" + nextDay + " icon " + icon1 + " temp " + nextTemp);

  let nextDayWeather = `<div  class="card" style="width: 12rem">
  <div class="card-body">
    <h5 class="card-title">${nextDay}</h5>

    <img class="card-img-top" src="${icon1}" alt="Card image cap" />
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${nextTemp} &#8451</li>
    <li class="list-group-item">Wind: ${weatherData.list[5].wind.speed} KPH</li>
    <li class="list-group-item">Humidity:${weatherData.list[5].main.humidity}%</li>
  </ul>
</div>`;

  day1.innerHTML = nextDayWeather;

  let day02 = moment(1675317600, "X").format("DD / MM / YYYY hh:mm");
  let dataWeather2 = weatherData.list[13].weather[0].icon;
  let icon2 = `https://openweathermap.org/img/wn/${dataWeather2}@2x.png`;
  let nextTemp2 = Math.floor(weatherData.list[13].main.temp - 273.15);

  console.log("date" + day02 + " icon " + icon2 + " temp " + nextTemp2);

  let Day2Weather = `<div  class="card" style="width: 12rem">
  <div class="card-body">
    <h5 class="card-title">${day02}</h5>
    <img class="card-img-top" src="${icon2}" alt="Card image cap" />
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${nextTemp2} &#8451</li>
    <li class="list-group-item">Wind: ${weatherData.list[13].wind.speed} KPH</li>
    <li class="list-group-item">Humidity:${weatherData.list[13].main.humidity}%</li>
  </ul>
</div>`;

  day2.innerHTML = Day2Weather;

  let day03 = moment(1675404000, "X").format("DD / MM / YYYY hh:mm");
  let dataWeather3 = weatherData.list[21].weather[0].icon;
  let icon3 = `https://openweathermap.org/img/wn/${dataWeather3}@2x.png`;
  let nextTemp3 = Math.floor(weatherData.list[21].main.temp - 273.15);

  console.log("date" + day03 + " icon " + icon3 + " temp " + nextTemp3);

  let Day3Weather = `<div  class="card" style="width: 12rem">
  <div class="card-body">
    <h5 class="card-title">${day03}</h5>
    <img class="card-img-top" src="${icon3}" alt="Card image cap" />
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${nextTemp3} &#8451</li>
    <li class="list-group-item">Wind: ${weatherData.list[21].wind.speed} KPH</li>
    <li class="list-group-item">Humidity:${weatherData.list[21].main.humidity}%</li>
  </ul>
</div>`;

  day3.innerHTML = Day3Weather;

  let day04 = moment(1675490400, "X").format("DD / MM / YYYY hh:mm");
  let dataWeather4 = weatherData.list[29].weather[0].icon;
  let icon4 = `https://openweathermap.org/img/wn/${dataWeather4}@2x.png`;
  let nextTemp4 = Math.floor(weatherData.list[29].main.temp - 273.15);

  console.log("date" + day04 + " icon " + icon4 + " temp " + nextTemp4);

  let Day4Weather = `<div  class="card" style="width: 12rem">
  <div class="card-body">
    <h5 class="card-title">${day04}</h5>
    <img class="card-img-top" src="${icon4}" alt="Card image cap" />
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${nextTemp3} &#8451</li>
    <li class="list-group-item">Wind: ${weatherData.list[29].wind.speed} KPH</li>
    <li class="list-group-item">Humidity:${weatherData.list[29].main.humidity}%</li>
  </ul>
</div>`;

  day4.innerHTML = Day4Weather;

  let day05 = moment(1675576800, "X").format("DD / MM / YYYY hh:mm");
  let dataWeather5 = weatherData.list[37].weather[0].icon;
  let icon5 = `https://openweathermap.org/img/wn/${dataWeather5}@2x.png`;
  let nextTemp5 = Math.floor(weatherData.list[37].main.temp - 273.15);

  console.log("date" + day05 + " icon " + icon5 + " temp " + nextTemp5);

  let Day5Weather = `<div  class="card" style="width: 12rem">
  <div class="card-body">
    <h5 class="card-title">${day05}</h5>
    <img class="card-img-top" src="${icon4}" alt="Card image cap" />
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Temp: ${nextTemp5} &#8451</li>
    <li class="list-group-item">Wind: ${weatherData.list[37].wind.speed} KPH</li>
    <li class="list-group-item">Humidity:${weatherData.list[37].main.humidity}%</li>
  </ul>
</div>`;

  day5.innerHTML = Day5Weather;
}

// console.log(weatherData.list);
//   * When a user searches for a city they are presented with current and future
//conditions for that city and that city is added to the search history
//   * When a user view future weather conditions for that city they are
//presented with a 5-day forecast that displays:
//     * The date,icon representation of weather conditions,temperature,humidity

//   * When a user click on a city in the search history they are again
//presented with current and future conditions for that city
//persit data to local storage to get items when user clicked
//a city name in search history
// let headCityName = weatherData.city.name;
// let weatherIcon = weatherData.list[3].weather[0].icon;
// let iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
// const celsiusTemp = weatherData.list[3].main.temp - 273.15;
// let nextWeather = `<h5>
// ${moment(weatherData.list[3].dt).format("DD/MM/YYYY")}) <img src=${iconUrl}
// </h5>
//   <p>Temp:  ${Math.floor(celsiusTemp)} &#8451</p>
//   <p>Wind: ${weatherData.list[3].wind.speed} KPH</p>
// <p>Humidity: ${weatherData.list[3].main.humidity}%</p>`;
// nextDay.innerHTML = nextWeather;
// console.log("test ");
