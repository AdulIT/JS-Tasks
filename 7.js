// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li.
// Содержимое li - нажатая клавиша.

const firstInput = document.querySelector('.first-input')
const firstUl = document.querySelector('.first-ul')

firstInput.addEventListener('keydown', (event) =>
{
    const li = document.createElement('li')
    li.innerText = event.key
    console.log(event)

    firstUl.appendChild(li)
})
// firstInput.addEventListener('change', (event) =>
// {
//     const li = document.createElement('li')
//     li.innerText = event.target.value
//     console.log(event)

//     firstUl.appendChild(li)
// }) 
// здесь не совсем понял, надо на keydown или change ?



// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз,
// как только клиент вписывает любой символ в поле (или стирает любой символ из поля).
// Вам понадобится считывать значение поля, это input.value

const secondInput = document.querySelector('.second-input')

secondInput.addEventListener('keyup', (e) =>
{
    console.log(e.target.value)
})

// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li.
// Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.querySelector('form'),
      thirdInput = form.querySelector('.third-input'),
      thirdUl = form.querySelector('.third-ul'),
      submit = form.querySelector('.submit')

form.addEventListener('submit', (e) =>
{
    const li = document.createElement('li')
    li.innerText = thirdInput.value
    thirdUl.appendChild(li)
    thirdInput.value = ''
})


// Задание 4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой.
// Добавить в html div. Внутри select будут options - арифметические знаки.
// В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit),
// над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option,
//     мы "забираем" значение  select.value). Результат отображается в div.

// 1) решить с помощью if
// 2) решить с помощью evel (https://developer.mozilla.org/...)

const calcForm = document.querySelector('.calc'),
      calcInput1 = calcForm.querySelector('.calc-input-1'),
      calcInput2 = calcForm.querySelector('.calc-input-2'),
      calcSelect = calcForm.querySelector('.calc-select'),
      calcResult = calcForm.querySelector('.calc-result')

// calcForm.addEventListener('submit', () =>
// {
//     let result

//     if (calcSelect.value == '+')
//     {
//         result = parseInt(calcInput1.value) + parseInt(calcInput2.value)
//     } else if (calcSelect.value == '-')
//     {
//         result = parseInt(calcInput1.value) - parseInt(calcInput2.value)
//     } else if (calcSelect.value == '*')
//     {
//         result = parseInt(calcInput1.value) * parseInt(calcInput2.value)
//     } else if (calcSelect.value == '/')
//     {
//         result = parseInt(calcInput1.value) / parseInt(calcInput2.value)
//     }
//     calcResult.innerText = parseInt(result)
// })

calcForm.addEventListener('submit', () =>
{
    calcResult.innerText = eval(`${calcInput1.value} ${calcSelect.value} ${calcInput2.value}`)
})


// Задание 5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке).
// При наведении на кнопку изменять ее цвет каждый раз рандомным цветом.
// При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов.
// Использовать обработку событий mouseenter, mouseleave на этой кнопке.
const btn = document.querySelector('.random')

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

btn.addEventListener('mouseenter', () =>
{
    const red = getRandomInteger(0, 255)
    const green = getRandomInteger(0, 255)
    const blue = getRandomInteger(0, 255)

    btn.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})

btn.addEventListener('mouseleave', () =>
{
    const degree = getRandomInteger(-180, 180)

    btn.style.cssText = `
        transform: rotate(${degree}deg)
    `
})
