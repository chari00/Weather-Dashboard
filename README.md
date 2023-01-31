# Weather Dashboard

## Table of Content

1. Description
2. Visual
3. Built with:
4. What I learned
5. Links
6. Resources
7. License

## 1. Description

A Weather App where user can see the weather outlook for multiple cities.These help the users plan their trips accordingly around the upcoming weather forecast.

## 2. Visual

### Image of the project in local storage view.

- <img src="/assets/images/view-localstorage.png">

### Image of the project in Webpage view.

- <img src="/assets/images/image-web.png">

## 3. Built with:

- javascript
- moment.js
- local storage
- bootstrap
- html
- css

## 4. What I learned

To see how you can add code functions, see below:

function setLocalStorage(cityIn) {
localStorage.setItem("history", JSON.stringify(cityIn));
}

function getFromLocalStorage() {
var history = localStorage.getItem("history");
searchHistory.textContent = history;
return JSON.parse(localStorage.getItem("history"));
}

let day02 = moment(1675317600, "X").format("DD / MM / YYYY ");
let dataWeather2 = weatherData.list[13].weather[0].icon;
let icon2 = `https://openweathermap.org/img/wn/${dataWeather2}@2x.png`;
let nextTemp2 = Math.floor(weatherData.list[13].main.temp - 273.15);

## 5. Links

### Source code location

https://github.com/chari00/Weather-Dashboard

### Deployed website URL

https://chari00.github.io/Weather-Dashboard/

## 6. Resources

### URL for resources

- https://getbootstrap.com/docs/4.0/components/card/

- https://www.w3schools.com/howto/howto_js_temperature_converter.asp

- https://www.freecodecamp.org/news/event-delegation-javascript/

- https://momentjscom.readthedocs.io/en/latest/moment/01-parsing/08-unix-timestamp/

- https://openweathermap.org/forecast5#geocoding

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

- https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

## 7. License

This project is licensed by MIT.
