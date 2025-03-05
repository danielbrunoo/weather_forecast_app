


const key = "815e508be334cb7492ed8dae6fabd304"


async function searchCity (city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then(response => response.json())
    console.log(data)    
}

function forecastSearch () {
    const city = document.querySelector(".input-city").value
    
    searchCity(city)
    }