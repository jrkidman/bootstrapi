let dogButton = document.querySelector("#dog-button");
let dogImage = document.querySelector("#dog-image");


dogButton.addEventListener("click", function () {
    console.log("Dog Button Clicked");

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (httpResponse) {
            return httpResponse.json();
        })
        .then(function (data) {
            dogImage.src = data.message;
        })
})




let cityInput = document.querySelector("#city-input");
let weatherButton = document.querySelector("#weather-button");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let description = document.querySelector("#description");


weatherButton.addEventListener("click", function () {
    let city = cityInput.value
    console.log(city);

    let chosenCity = (`https://goweather.herokuapp.com/weather/${city}`);
    console.log(chosenCity);


    fetch(chosenCity)
        .then(function (httpResponse) {
            return httpResponse.json();
        })
        .then(function (data) {
            temp.innerHTML = `The current temperature is: ${data.temperature}`;
            wind.innerHTML = `The current wind speed is: ${data.wind}`;
            description.innerHTML = `The weather is currently: ${data.description}`;
        })
})





