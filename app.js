let userCity = prompt("What is your city?", ""); 

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    //---------------------------------CITY---------------------------------
    let city = document.createElement("div");
    city.classList.add("city");
    city.innerHTML = data.name;
    document.querySelector(".weather-head-left").appendChild(city);

    //---------------------------------TEMPERATURE---------------------------------
    let temp = document.createElement("div");
    temp.classList.add("temp");
    temp.innerHTML = `${data.main.temp}˚`;
    document.querySelector(".weather-head-left").appendChild(temp);

    //---------------------------------ICON---------------------------------
    let icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    document.querySelector(".weather-head-right").appendChild(icon);

    //---------------------------------DESCRIPTION---------------------------------
    let description = document.createElement("div");
    description.classList.add("description");
    description.innerHTML = data.weather[0].description;
    document.querySelector(".weather-head-left").appendChild(description);

    // pressure
    let pressure = document.createElement("div");
    pressure.classList.add("pressure");
    pressure.innerHTML = `Pressure: ${data.main.pressure}`;
    document.querySelector(".weather-body-left").appendChild(pressure);

    // humidity
    let humidity = document.createElement("div");
    humidity.classList.add("humidity");
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;
    document.querySelector(".weather-body-left").appendChild(humidity);

    // wind
    let wind = document.createElement("div");
    wind.classList.add("wind");
    wind.innerHTML = "--wind--";
    document.querySelector(".weather-body-right").appendChild(wind);
    // speed of wind
    let windSpeed = document.createElement("div");
    windSpeed.classList.add("windSpeed");
    windSpeed.innerHTML = `Speed: ${data.wind.speed}`;
    document.querySelector(".weather-body-right").appendChild(windSpeed);

    // deg of wind
    let windDeg = document.createElement("div");
    windDeg.classList.add("windDeg");
    windDeg.innerHTML = `Deg: ${data.wind.deg}`;
    document.querySelector(".weather-body-right").appendChild(windDeg);
  });
