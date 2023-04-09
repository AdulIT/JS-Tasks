function updateClock()
{
    let currentTime = new Date()
        currentHours = currentTime.getHours(),
        currentMinutes = currentTime.getMinutes(),
        currentSeconds = currentTime.getSeconds()
    
    const hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds')

    hours.innerHTML = getZero(currentTime.getHours())
    minutes.innerHTML = getZero(currentTime.getMinutes())
    seconds.innerHTML = getZero(currentTime.getSeconds())
}

function getZero(num)
{
    if (num >= 0 && num < 10)
    {
        return `0${num}`
    } else
    {
        return num
    }
}

let timeInterval = setInterval(updateClock, 1000)
