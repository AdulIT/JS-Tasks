// 1. Задачи на деструктуризацию.

// 1.1 Задать массив имен. Создать 2 переменные,
//     которые будут хранить первых 2 имени, вывести их в консоль.
//     Создать массив, который будет хранить остальные имена,
//     вывести имена из него по одному в консоль.
//     Если кол-во элементов массива меньше 2,
//     то вторая переменная должна стать равна "alex".

// const names = ['Franky','Brook', 'Robin', 'Nami', 'Sanji', 'Zoro', 'Jimbei', 'Usopp', 'Chopper', 'Luffy']
// let franky,
//     brook,
//     rest
// if (names.length < 2)
// {
//     names.push('alex')
// }

// [franky, brook, ...rest] = names

// console.log(franky, brook)
// rest.forEach(name =>
//     {
//         console.log(name)
//     })


// 1.2 Задать массив имен. Задать функцию,
//     которая принимает 3 параметра и выводит их в консоль.
//     Передать массив в функцию.
//     Внутри функции каждый параметр должен быть равен одному из элементов массива

// const names = ['Luffy', 'Zoro', 'Sanji']

// function printNames(firstName, secondName, thirdName)
// {
//     console.log(firstName)
//     console.log(secondName)
//     console.log(thirdName)
// }

// printNames(...names)

// 1.3 Задать объект с N полей.
//     Создать 2 переменные, которые будут называться так же,
//     как поля, и хранить 2 значения полей объекта.
//     Если соответствующих полей в объекте нет, задать значения чисел 1 и 2.
//     Все остальные поля объекта записать в переменную fields.

const obj =
{
    name: 'Mugiwara',
    age: 19,
    devilFruit: 'Hito Hito no mi model Nika'
}
for (let key in obj)
{
    // console.log(key);
    console.log(obj[key]);
}
const {name, age, ...fields} = obj
console.log(name, age, fields)