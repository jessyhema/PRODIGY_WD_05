function weatherFn(city) {
    const apiKey = '41881d1c0fd06f59a630a37d2999959c'; // Replace with your actual OpenWeatherMap API key
    const apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={41881d1c0fd06f59a630a37d2999959c}';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found (HTTP ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data: ' + error.message);
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const date = document.getElementById('date');
    const weatherIcon = document.getElementById('weather-icon');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const windSpeed = document.getElementById('wind-speed');

    cityName.textContent = data.name;
    date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    weatherIcon.src = `https://openweathermap.org/img/wn/10d@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weather-info').style.display = 'block';
}
