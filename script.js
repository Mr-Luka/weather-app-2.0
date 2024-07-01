const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".name");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const weatherIcon = document.querySelector(".icon");
const weatherCondition = document.querySelector(".condition");
const form = document.querySelector("#locationInput");
const input = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const cloudy = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");


let cityInput = "Los Angeles";

cities.forEach(city => {
    city.addEventListener("click", e => {
        cityInput = e.target.innerHTML;
        fetchWeather()
        app.style.opacity= "0";
    })
})

form.addEventListener("submit", e=> {
    if (search.value.lenght == 0) {
        alert("Please enter a city name");
    } else {
        cityInput = search.value;
        fetchWeather();
        search.value = "";
        app.style.opacity = "0";
    }
    e.preventDefault();
    
})
function dayOfTheWeek (day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()]
}

