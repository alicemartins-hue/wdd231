
const town = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = '8fa091026a133dda5621ccd86366e719';
const lon = '6.63';
const lat = '49.74';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();


function displayResults(data) {
    town.innerHTML = data.name
    captionDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', icon)
    weatherIcon.setAttribute('alt', data.weather[0].description)
}

