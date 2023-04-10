const currentCity = document.querySelector('.weather__current-city'),
      currentCityTime = document.querySelector('.weather__current-time'),
      weatherIcon = document.querySelector('.weather__current-icon'),
      weatherName = document.querySelector('.weather__current-name'),
      weatherDegree = document.querySelector('.weather__current-degree span'),
      windSpeed = document.querySelector('.weather__current-speed__measure'),
      weatherBody = document.querySelector('.weather__body')

const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Astana&appid=a94d0a5ac08570add4b47b8da933f247&units=metric')
xhr.send()

xhr.addEventListener('load', () =>
{
    const res = JSON.parse(xhr.response)
    const weatherDescription = res.list[0].weather[0].description
    const currentTime = new Date().toLocaleTimeString()
    const weatherSrc = res.list[0].weather[0].icon

    currentCity.innerHTML = res.city.name
    currentCityTime.innerHTML = currentTime.slice(0,-6)
    weatherIcon.src = `https://openweathermap.org/img/wn/${weatherSrc}@2x.png`
    weatherName.innerHTML = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)
    weatherDegree.innerHTML = Math.floor(res.list[0].main.temp)
    windSpeed.innerHTML = res.list[0].wind.speed + ' m/s'    

    for (let i = 0; i < 40; i += 8)
    {
        const weatherDayTime = res.list[i].dt_txt
        weatherBody.innerHTML += `
            <li class="weather__item">
                <div class="weather__item-left">
                    <div class="weather__item-date">${weatherDayTime.slice(0, 10)}</div>
                    <div class="weather__item-time">${weatherDayTime.slice(11, 19)}</div>
                </div>
                <img src="https://openweathermap.org/img/wn/${res.list[i].weather[0].icon}@2x.png" alt="weather-icon" class="weather__item-icon">
                <div class="weather__item-degree"><span>${Math.floor(res.list[i].main.temp)}</span>&deg;С</div>
            </li>
        `
    }
})
