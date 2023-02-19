// Задание 2
// Есть объект с именами и заработными платами инженеров:
const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
// Заработная плата ххх составляет ххх рублей.

for (let i in engineers)
{
    console.log(`Заработная плата ${i} составляет ${engineers[i]} рублей.`)
}

// Задание 3
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

const arr = [4, 'fds', 3, '4', 3]

for (let i = 1; i < arr.length; i = i + 2)
{
    console.log(arr[i])
}

// Задание 4
// Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

for (let i = 0; i < numbers.length; i++)
{
    console.log(`Индексу ${i} соответствует число ${numbers[i]}`)
}

// Задание 5
// Дан массив объектов, например:
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
// Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.

for (let i = 0; i < questions.length; i++)
{
    for (let value in questions[i])
    {
        questions[i].usersAnswers = null
    }
}

console.log(questions);

// Задание 6
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// 1) Посчитать и вывести в консоль сумму элементов в массиве.
//     Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum)
//     и записать в нее начальное значение (в случае с суммой - ноль).
//     Затем уже описать цикл, в котором эта сумма будет считаться в каждой итерации цикла
//     к ней будет прибавляться следующий элемент массива).
// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.
// 3) Найти и вывести в консоль максимальное число массива.
//     Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max),
//     записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
// 4) Определить и вывести в консоль индекс максимального числа массива
//     (или индексы, если число встречается более одного раза).
//     Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.

let arrNums = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
let sum = 0

for (let i = 0; i < arrNums.length; i++)
{
    sum += arrNums[i]
}
console.log(sum);

let sumOfEvenNums = 0
let max = 0

for (let i = 0; i < arrNums.length; i++)
{
    if (arrNums[i] % 2 == 0)
    {
        sumOfEvenNums += arrNums[i]
    }

    if (arrNums[i] > arrNums[i + 1])
    {
        max = arrNums[i]
    } else if (arrNums[i] < arrNums[i + 1])
    {
        max = arrNums[i + 1]
    }
}
console.log(sumOfEvenNums);
console.log(max);


// Задание 7
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr,
// но в новом должны содержаться только положительные элементы.
// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []).
// Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный,
// добавлять его в массив newArr.

let someArr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
let newArr = []

for (let i = 0; i < someArr.length; i++)
{
    if (someArr[i] >= 0)
    {
        newArr.push(someArr[i])
    }
}
console.log(newArr)

// Задание 8
// Написать функцию, которая принимает массив (array) и число (num).
// Функция должна создать новый массив из элементов массива array,
// и в этом новом массиве должны содержаться только элементы, больше и равные (>=) значению num.

function newArray(array, num)
{
    const modifiedArr = []
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] >= num)
        {
            modifiedArr.push(array[i])
        }
    }
    console.log(modifiedArr);
}

newArray(someArr, 3) // someArr находится выше, в задании 7

// Задание 9
// Существует массив пользователей, например:
const users = [
    {
        name: 'Vasya',
        age: 23
    },
    {
        name: 'Olya',
        age: 12
    },
    {
        name: 'Anna',
        age: 22
    },
    {
        name: 'Alex',
        age: 18
    },
    {
        name: 'Valery',
        age: 8
    }
]
// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

for (let i = 0; i < users.length; i++)
{
    for (let value in users[i])
    {
        // console.log(value);
        if (value === 'age' && users[i][value] > 15)
        {
            console.log(users[i][value]);
        }
    }                                                                                                                                                                
}

// Задание 10
// Задать массив слов. Например:

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):
//     [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
//     Вывести этот массив в консоль.
//     Подсказка: длину строки можно определить с помощью метода .length.
//     Например, для переменной let string = 'text' это будет string.length
//     (результат - 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

let vegetablesObj = {}
for (let i = 0; i < vegetables.length; i++)
{
    vegetablesObj.word = vegetables[i]
    vegetablesObj.length = vegetables[i].length
    // console.log(vegetablesObj.word, vegetablesObj.length)

}

console.log(vegetablesObj)
