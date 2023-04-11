// https://jsonplaceholder.typicode.com/

// 1. При загрузке страницы создавать задачу методом POST. Title - ваше имя.
// Возвращаемое после запроса JSON содержимое записать в тег div.

const xhr = new XMLHttpRequest()
const task1 = document.querySelector('.task-1')

xhr.open('POST', 'http://apichallenges.herokuapp.com/todos')
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.setRequestHeader('Accept', 'application/json')
xhr.send('{"Title": "Bekzhan"}')

xhr.addEventListener('load', () =>
{
    const response = JSON.parse(xhr.response)
    console.log(response.id)
    task1.innerHTML = JSON.stringify(response)
})


// 2. Добавить кнопку "Обновить", при нажатии на которую отправляется запрос PUT на урл
// "https://todoappexamplejs.herokuapp.com/items/${id}, который пришел в ответе на POST запрос}".
// Тело запроса - JSON, в котором title - текущее время.
// После обновления текст кнопки нужно проставить в "Обновлено".
const btnUpdate = document.querySelector('.btn_update')
// const xml = new XMLHttpRequest()
const now = new Date().toLocaleTimeString().slice(0, -6)

btnUpdate.addEventListener('click', () =>
{
    const response = JSON.parse(xhr.response)

    xhr.open('PUT', `http://apichallenges.herokuapp.com/todos/${response.id}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send(`{"Title": "${now}"}`)
    task1.innerHTML = JSON.stringify(response)
    btnUpdate.innerText = 'Обновлено'
})



// 3. Добавить кнопку "Удалить", при нажатии на которую отправляется запрос DELETE на урл из предыдущей подзадачи,
// но уже без тела запроса.
// После удаления текст кнопки нужно проставить в "Удалено"

const btnDelete = document.querySelector('.btn_delete')

btnDelete.addEventListener('click', () =>
{
    const response = JSON.parse(xhr.response)

    xhr.open('DELETE', `http://apichallenges.herokuapp.com/todos/${response.id}`)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()

    task1.innerHTML = ''
    btnDelete.innerText = 'Удалено'    
})