// Задание 2. Карточки стран

// Есть API с информацией о 120 странах мира. URL (запросы на FULL NAME):

// https://restcountries.com

// Получить данные с помощью fetch и сформировать разметку карточек стран (например каждую 10-ю из массива) по ОБРАЗЦУ.

// ВАЖНО: Для разметки используйте сетку bootstrap, шаблоны смотрите ЗДЕСЬ.

const container = document.querySelector('.container')

function getAllCountries(url)
{
    fetch(url)
    .then(response => response.json())
    .then(data => 
        {

            for (let i = 0; i < data.length; i = i + 10)
            {
                // console.log(data[i])
                const langs = {}
                const currencies = {}

                if (Object.getOwnPropertyNames(data[i].languages).length > 1)
                {
                    for (const key in data[i].languages)
                    {
                        langs.key = data[i].languages[key]
                        currencies[i] = data[i].currencies[Object.keys(data[i].currencies)[0]]

                        container.innerHTML += `
                            <div class="card" style="width: 18rem;">
                                <img src="${data[i].flags.png}" class="card-img-top" alt="countries">
                                <div class="card-body">
                                    <h5 class="card-title">${data[i].name.official}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${data[i].continents}</h6>
                                    <p class="card-text">👨‍👩‍👧‍👦 ${(data[i].population / 1000000).toFixed(1)} млн</p>
                                    <p class="card-text">🗣️ ${langs['key']}</p>
                                    <p class="card-text">💰 ${currencies[i]['symbol']} ${currencies[i]['name']}</p>
                                </div>
                            </div>
                        `
                    }
                }
            }
        })
}

const url = 'https://restcountries.com/v3.1/all'

getAllCountries(url)