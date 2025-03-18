document.getElementById("getWeather").addEventListener("click", function() {
    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "72b13e0a7a0d946d554d183b38d73bca"; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
            } else {
                // Update the weather details
                document.getElementById("weatherDetails").style.display = "block";
                document.getElementById("cityName").textContent = `City: ${data.name}`;
                document.getElementById("temp").textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
                document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById("windSpeed").textContent = `Wind Speed: ${data.wind.speed} m/s`;
            }
        })
        .catch(error => {
            alert("Error fetching data. Please try again.");
            console.error(error);
        });
});
