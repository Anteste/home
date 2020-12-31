const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');

// App data
let weather = {};

// Change to 'F' for Fahrenheit
var tempUnit = 'C';

// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = '404986382953a379792c2d440d1807a6';

// Set Position function
setPosition();

function setPosition(position) {

    //https://www.latlong.net/
    let latitude = 33.573109;
    let longitude = -7.589843;

    getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    //console.log(api); debug api

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {

            weather.temperature = Math.round(data.main.temp);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
        })
        .then(function () {
            displayWeather();
        });
}

// Display Weather info
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/OneDark/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature}°<span class="darkfg">${tempUnit}</span>`;
    descElement.innerHTML = weather.description;
}
