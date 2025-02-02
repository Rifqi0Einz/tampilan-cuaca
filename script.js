const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = 'd455ce698af9fd04de2a65417f8b9148';
    const city = document.querySelector('search-box input').value;

    if (city == '')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(Response => Response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'image/clear.png';
                break;

            case 'Rain':
                image.src = 'image/rain.png';
                break;

            case 'Snow':
                image.src = 'image/snow.png';
                break;

            case 'Clouds':
                image.src = 'image/cloud.png';
                break;

            case 'Mist':
                image.src = 'image/mist.png';
                break;

            case 'Haze':
                image.src = 'image/mist.png';
                break;

            default:
            image.src ='image/clear.png';
        }

    });

});