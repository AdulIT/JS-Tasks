// Задание
// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com/users.
// Вывести имена пользователей на страницу на боковой панели, как вертикальное меню.
// В основной части (справа от бокового меню) изначально показывается информация о первом пользователе.
// При клике на имя пользователя на боковой панели -  в основной части информация меняется на выбранного пользователя.
// Для оформления использовать Bootstrap компонент Card:
// - для списка пользователей - шаблон Links and buttons - вариант с кнопками
// https://getbootstrap.com/docs/5.1/components/card/#list-groups
// - для отображения информации о пользователе - шаблон карточки без изображения.
// Нужно отобразить имя, ник, место проживания, компанию и email (как ссылку вида mailto:)
// ПРИМЕР, как должно получиться.

const ul = document.querySelector('.list-group')
const namesInfo = document.querySelector('.card-info')

async function fetchUsers(url)
{
    const response = await fetch(url)
    const users = await response.json()
    // console.log(users[0])

    for (let i = 0; i < users.length; i++)
    {
        ul.innerHTML += `
            <li class="list-group-item">${users[i].name}</li>
        `

        namesInfo.innerHTML +=
        `
            <div class="card-body">
                <h5 class="card-title">${users[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${users[i].username}</h6>
                <p class="card-text">Street: ${users[i].address.street}, Suite: ${users[i].address.suite}, City: ${users[i].address.city}, Zipcode: ${users[i].address.zipcode}</p>
                <a href="mailto:${users[i].email}" class="card-link">Написать ему</a>
            </div>
        `
    }

    const listOfNames = document.querySelectorAll('.list-group-item')
    const namesInfoBody = document.querySelectorAll('.card-body')

    function hideUserContents()
    {
        namesInfoBody.forEach(username =>
            {
                username.classList.add('hide')
                username.classList.remove('show')
            })

        listOfNames.forEach(name =>
            {
                name.classList.remove('list-group-active')
            })
    }

    function showUserContent(i = 0)
    {
        namesInfoBody[i].classList.add('show')
        namesInfoBody[i].classList.remove('hide')
        listOfNames[i].classList.add('list-group-active')
    }

    hideUserContents()
    showUserContent()

    ul.addEventListener('click', (event) =>
    {
        const target = event.target

        if (target && target.classList.contains('list-group-item'))
        {
            listOfNames.forEach((item, i) =>
                {
                    if (target == item)
                    {
                        hideUserContents()
                        showUserContent(i)
                    }
                })
        }
    })
}

const url = 'https://jsonplaceholder.typicode.com/users'

fetchUsers(url)