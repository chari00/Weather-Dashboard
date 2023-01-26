let APIKey = "75bfc21db16c1c30eefe952a9b9be736";

// Here we are building the URL we need to query the database
let queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Manila,Philippines&appid=" +
  APIKey;

fetch(queryURL)
  .then((response) => response.json())
  .then(function (result) {
    console.log(result);
    // document.querySelector("#search-input").textContent(city);
  });
