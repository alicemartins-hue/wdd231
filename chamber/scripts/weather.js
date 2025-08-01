
const town = document.querySelector('#town');
const currentTemp = document.querySelector('#current-temp');
const captionDesc = document.querySelector('figcaption');

const img = document.createElement('img');
document.getElementById('container').appendChild(img);



const myKey = '8fa091026a133dda5621ccd86366e719';
const lon = '-8.296';
const lat = '41.444';

const urlW = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(urlW);
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
    img.setAttribute('src', icon)
    img.setAttribute('alt', data.weather[0].description)
}

