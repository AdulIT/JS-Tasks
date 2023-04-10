// HTTP requests
// 1
// По данному url расположена задача:
// https://jsonplaceholder.typicode.com/todos/1
// В html предусмотреть div.
// Достать с сервера заголовок задачи и отобразить его в div.
const div = document.querySelector('.todo')

const xml = new XMLHttpRequest()
xml.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
xml.send()

xml.addEventListener('load', () =>
{
    const responseObj = JSON.parse(xml.response)
    div.innerHTML = responseObj.title
})

// Задание 2
// Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
// Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
const ul =  document.querySelector('.todos')
const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')
xhr.send()

xhr.addEventListener('load', () =>
{
    const res = JSON.parse(xhr.response)
    // console.log(res)
    for (let i = 0; i < 20; i++)
    {
        const li = document.createElement('li')
        li.innerHTML = res[i].title
        ul.appendChild(li)
    }
})

// Задание 3
// Отобразить на странице 10 первых комментариев с сервера *https://jsonplaceholder.typicode.com/comments*
// Оформить тегами как в ПРИМЕРЕ.
// Порядок работы:
// 1) записать в переменную блок для отрисовки результата.
// 2) описать функцию отрисовки результата (напр. addInfo).
// Функция принимает 3 параметра - тег, содержимое и название класса для CSS.
// Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
// 3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse).
// Записать этот результат в переменную, т.к. с ним будем дальше работать.
// 4) внутри функции .onload:
// - обойти через цикл первые 10 элементов массива
// - вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
// 5) прописать CSS для классов.
const comment = document.querySelector('.comments')

function addInfo(tag, body, selector)
{
    const tagName = document.createElement(tag)
    tagName.innerHTML = body
    tagName.classList.add(selector)
    comment.appendChild(tagName)
}

const xmlHttpReq = new XMLHttpRequest()
xmlHttpReq.open('GET', 'https://jsonplaceholder.typicode.com/comments')
xmlHttpReq.send()

xmlHttpReq.addEventListener('load', () =>
{
    const resObj = JSON.parse(xmlHttpReq.response)

    for (let i = 0; i < 10; i++)
    {
        addInfo('h3', resObj[i].name, 'name')
        addInfo('p', resObj[i].email, 'email')
        addInfo('p', resObj[i].body, 'body')
    }
})

// Задание 4
// Создать собственный погодный виджет на основе данных с сервера погоды.
// Оформить, как в примере: ЗДЕСЬ.
// Документация: https://openweathermap.org/api...
// *Порядок работы:*
// 1)  Проверить, работает ли API-ключ, данный в примере. 
//     Для этого открыть url https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247
//     Если данные отображаются - можно не получать свой ключ, иначе см. п. 1.1.
// 1.1. Зарегистрироваться и получить собственный API-ключ на сайте https://home.openweathermap.or...
// 2) Создать html-css разметку под данные.
//     - общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза (пример см. ЗДЕСЬ)
//     - внутри нижней части виджета через js будут добавляться строки по дням - это дивы,
//     им нужно сразу прописать стили (flex-распределение вставляемых элементов, нижняя граница).
// 3) Написать JS с HTTP-запросом на url.
//     - кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по Цельсию
//     (см. на странице документации раздел *Units of measurement*)
// 4) добавить информацию из ответа в виджет на страницу.
//     - в верхней части виджета отобразить город и дату (из полученного JSON-объекта).
//     Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней ЗДЕСЬ.
//     - из JSON-объекта "достать" текущую погоду (.list[0]) - первый объект внутри массива.
//     Как узнать url иконки: https://openweathermap.org/wea...
//     - в нижней части добавить необходимую информацию через цикл.
//     Вам понадобится каждый 8-й объект, т.к в ответе приходит погода на каждые 3 часа (8 раз в сутки),
//     а нам нужна погода 1 раз в сутки.