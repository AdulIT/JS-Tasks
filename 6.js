// Задание 1
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:
// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)
const browser = navigator.appCodeName
const os = navigator.appVersion
const currentUrl = location.href

console.log(`На компьютере с ОС ${os} с помощью браузера ${browser} я открыл страничку ${currentUrl}`)

// Задание 2
// В файле html есть разметка:

{/* <ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul> */}
// Вывести в консоль каждое из имен (содержимое каждого li).

// ПОДСКАЗКИ
// 1) C помощью метода document.querySelectorAll найдите на странице все пункты списка (li) и запишите в переменную.
// У вас получится html-коллекция (массив). 
// 2) Обойдите коллекцию с помощью forEach и для каждого li вывкдите в консоль текстовое содержимое (innerText)

const listItems = document.querySelectorAll('li')

listItems.forEach(li =>
    {
        console.log(li.innerText)
    })

// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент.
// Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

const p = document.createElement('p')
p.innerText = 'lorem - fish text'
p.style.fontSize = '36px'
p.style.fontWeight = 'bold'
document.body.appendChild(p)

// Задание 5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.

const date = document.querySelector('.date')
const currentDate = new Date()
date.innerText = currentDate


// Задание 6
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое.
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое.
// Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function createHTMLElement(tagName, color, content)
{
    const newTag = document.createElement(tagName)
    newTag.style.backgroundColor = color
    newTag.innerText = content

    document.body.appendChild(newTag)
}

createHTMLElement('p', 'red', 'bla-bla-bla')
createHTMLElement('div', 'blue', 'text')

// Задание 7
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option)
// под годы от 1960 по 2020.
const select = document.querySelector('.select')

for (let i = 1960; i <= 2020; i++)
{
    const option = document.createElement('option')
    option.innerText = i
    select.appendChild(option)
}


// Задание 8

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:


const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
]
const clientsUl = document.querySelector('.clients')


// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом



// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива),
// статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

clients.forEach(client =>
    {
        const clientLi = document.createElement('li')
        if (client.order)
        {
            clientLi.innerText = `Клиент ${client.name} оплатил заказ`
            clientsUl.appendChild(clientLi)
        } else
        {
            clientLi.innerText = `Клиент ${client.name} отменил заказ`
            clientsUl.appendChild(clientLi)
        }
    })


// Задание 9
// Есть массив ссылок:

let linksArr = [
    'https://www.amazon.com/',
    'https://www.youtube.com/',
    'https://devby.io/',
    'https://www.google.com/',
    'https://apple.com/'
]

// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")


// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, 
// value - его значение.
// Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.

// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY

const linksWrapper = document.createElement('div')
linksWrapper.style.cssText = `
    padding: 15px;
    background-color: #fff2f1;
`

linksArr.forEach(link =>
    {
        const a = document.createElement('a')
        a.style.display = 'block'
        a.href = link
        a.setAttribute('target', '_blank')
        a.innerText = link
        linksWrapper.appendChild(a)
    })

document.body.appendChild(linksWrapper)

// Задание 10
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код,
// который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li

const forRemove = document.querySelectorAll('.forRemove')

function removeElement(selector)
{
    selector.forEach(item =>
        {
            item.remove()
        })
}

removeElement(forRemove)


// Задание 11
// Создать массив объектов с полями name, age. Например:

const users = [
    {name: 'Mark', age: 12},
    {name: 'Olga', age: 30},
    {name:'Tom', age: 25},
    {name:'Den', age: 43}
]

// Создать в html таблицу (table).

// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст.
// Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк.
// Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

const table = document.querySelector('table')

users.forEach(user =>
    {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td style="color: red;">${user.name}</td>
            <td style="color: blue;">${user.age}</td>
        `
        table.appendChild(tr)
    })

document.body.appendChild(table)
    