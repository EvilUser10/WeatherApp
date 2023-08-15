// Importing functions from the weatherDetect.mjs module
import { getImage, addImage } from './weatherDetect.mjs';

// API KEY
const KEY = "f61f20e990f13c01dd46a6442239e981";

// Selecting DOM elements
const temperatura = document.querySelector(".temperatura");
const humedad = document.querySelector(".humedad");
const viento = document.querySelector(".viento");
const campoCiudad = document.querySelector("#campoCiudad");
const buttonCampoCiudad = document.querySelector("#buttonCampoCiudad");

// Event listener for the button to fetch weather information and add an image
buttonCampoCiudad.addEventListener("click", async () => {
    let temperaturaActual;
    let humedadActual;
    let vientoActual;
    await conexionAPI(campoCiudad.value, KEY).then((data) => {
        // Extracting temperature, humidity, and wind speed data from API response
        temperaturaActual = data.main.temp;
        temperatura.innerHTML = temperaturaActual + "°C";

        humedadActual = data.main.humidity;
        humedad.innerHTML = humedadActual + "%";

        vientoActual = data.wind.speed;
        viento.innerHTML = vientoActual + "km/h"

        // Adding the weather image
        addImage(getImage(data.weather[0].icon));
    });
});

// Function to connect with the API and retrieve weather data
async function conexionAPI(ciudad, key) {
    try {
        // Fetching weather data from the API
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`);
        let data = await api.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
}

// Function to create an image element with the specified URL
function createImage(url) {
    const para = document.createElement('img');
    para.src = url;
}
