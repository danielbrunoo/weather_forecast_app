const key = "815e508be334cb7492ed8dae6fabd304"

function displayDataOnScreen (data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".weather").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".text-forecast").innerHTML= data.weather [0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% úmido"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity (city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json()) 
    displayDataOnScreen (data)
    
}

function forecastSearch () {
    const city = document.querySelector(".input-city").value
    
    searchCity(city)
    }