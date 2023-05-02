// Задание 1. Emojihub
// Изучите документацию API эмодзи:
// https://github.com/abourtnik/emojis-world
// В разделе Endpoints найдите, по какому url получить, и изучите ответы:
// случайный эмодзи
// массив всех эмодзи
// эмоджи определенной категории

// 1.1. Добавить в html кнопку «Получить эмодзи дня», под ней пустой див для результата. 
//      По нажатию кнопки отправлять запрос за рандомным эмодзи, отобразить его в диве под кнопкой,
//      размером примерно 70px (это можно сделать с помощью CSS-свойства font-size).
// 1.2. Отправить запрос за всеми эмодзи, разместить их на странице по категориям (см. образец ЗДЕСЬ).
// ВАЖНО! Не нужно делать отдельные запросы для категорий,
// необходимо взять результат из одного общего запроса.
// Вам может быть удобно использовать конструкцию Switch-Case, почитайте о ней ЗДЕСЬ.

const btn = document.querySelector('.btn')
const dailyEmoji = document.querySelector('.emoji-daily')
const allEmojiContainer = document.querySelector('.all-emoji')

const randomEmojiUrl = 'https://api.emojisworld.fr/v1/random'
const allCategories = 'https://api.emojisworld.fr/v1/categories'

btn.addEventListener('click', () =>
{
    getRandomEmoji(randomEmojiUrl)
})


function getRandomEmoji(url)
{
    const randomIndex = Math.floor(Math.random() * 50)
    fetch(url)
    .then(response => response.json())
    .then(data => 
        {
            const emoji = data.results[randomIndex].emoji
            dailyEmoji.innerHTML = emoji
        })
}


const categories = {}

function getAllCategories(url)
{
    fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .then(array =>
        {
            array.forEach((element, i) => {
                const space = element.name.indexOf(' ')
                categories[i] = element.name.slice(0, space).toLowerCase()
                allEmojiContainer.innerHTML += `
                    <h2 class="${categories[i]}">${element.name.replace('&', 'and')}</h2>
                `
            })

            for (const category in categories)
            {
                let url = `https://api.emojisworld.fr/v1/search?q=${categories[category]}&categories`
                // console.log(url);
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    data.results.forEach((item) =>
                        {
                            // console.log(item.category)
                            // switch(item.category)
                            // {
                            //     case categories[category]:

                            // }
                            allEmojiContainer.innerHTML += item.emoji
                        })
                    // console.log(data.results[0].emoji)
                })
            }
        })

    
        
}

getAllCategories(allCategories)
console.log(categories)


 