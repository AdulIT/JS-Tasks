// Задание 2
// 1)
// Задать объект с полем name.
// Задать переменную, которая будет хранить JSON упомянутого объекта.
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// 2)
// Создать переменную user, в которой хранится объект.
// Записать переменную в localStorage.
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

const obj =
{
    name: 'Beka'
}

const objJSON = JSON.stringify(obj)
const parseJSON = JSON.parse(objJSON)
console.log(objJSON)
console.log(parseJSON)

const user =
{
    name: 'Alex',
    age: 25
}
const objToJSON = JSON.stringify(user)
localStorage.user = objToJSON

const newUser = JSON.parse(localStorage.user)
console.log(newUser)