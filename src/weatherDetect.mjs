
// Parent container element for the weather image
const containerImg = document.body.querySelector('.createImage');

// Mapping of weather codes to image URLs
const weathersCode = {
    "01d": "weather-icons/Sunny.png",
    "02d": "weather-icons/PartlyCloudyDay.png",
    "03d": "weather-icons/Cloudy.png",
    "04d": "weather-icons/Overcast.png",
    "09d": "weather-icons/OccLightRain.png",
    "10d": "weather-icons/IsoRainSwrsDay.png",
    "11d": "weather-icons/HeavyRainSwrsDay.png",
    "13d": "weather-icons/Blizzard.png",
    "50d": "weather-icons/Mist.png",
    "01n": "weather-icons/Clear.png",
    "02n": "weather-icons/PartlyCloudyNight.png",
    "03n": "weather-icons/Cloudy.png",
    "04n": "weather-icons/Overcast.png",
    "09n": "weather-icons/OccLightRain.png",
    "10n": "weather-icons/IsoRainSwrsNight.png",
    "11n": "weather-icons/HeavyRainSwrsNight.png",
    "13n": "weather-icons/Blizzard.png",
    "50n": "weather-icons/Mist.png"
};

// Function to get the image URL based on the weather code
export function getImage(code) {
    return weathersCode[code];
}

// Function to add the weather image to the container
export function addImage(url) {
    // If the container already has an image child, remove it
    if (containerImg.children[0]) {
        containerImg.removeChild(containerImg.children[0]);
    }

    // Create a new image element and set its source URL
    const newImg = document.createElement('img');
    newImg.src = url;

    // Add the new image to the container
    containerImg.appendChild(newImg);
}
