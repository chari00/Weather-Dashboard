let APIKey = "75bfc21db16c1c30eefe952a9b9be736";
let city = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-button");
let inputContainer = document.querySelector(".input-group");
let today = document.querySelector("#today");
let forecast = document.querySelector("#forecast");

// let queryURL =
//   "https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=" + APIKey;

// fetch(queryURL)
//   .then((response) => response.json())
//   .then(function (result) {
//     console.log(result);
//   });

function getCity(city) {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => response.json())
    .then((city) => {
      city.textContent = JSON.stringify(city);
      // inputContainer.appendChild(city).textContent = JSON.stringify(city);
      // inputContainer.appendChild(searchBtn);
      // return console.log(city);
    });
}

searchBtn.addEventListener("click", weatherData);
function weatherData(event) {
  event.preventDefault();
  searchValue = city.value;
  console.log(searchValue);
}
