// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом,
// должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:

function sum(a, b)
{
    if (arguments.length === 2)
    {
        if (typeof a === 'number' && typeof b === 'number')
        {
            console.log(a + b)
        } else
        {
            console.log('введенные данные не являются числами')
        }
    } else if (arguments.length < 2)
    {
        console.log('введите два параметра')
    }
}
sum(2, 4); // 6
sum('d', 4); // введенные данные не являются числами
sum(1, [2]); // введенные данные не являются числами
sum(1); // введите два параметра
sum(); // введите два параметра


// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"
function square(a) {
    if (arguments.length > 0)
    {
        console.log(a * a)
    } else
    {
        console.error('Uncaught Error: Функция "square" не может быть вызвана без аргумента')
    }
}

square(10) // 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10
// (обязательно проверить, что число не больше 10 и не меньше 0).
// Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

const guessNumber = (n) =>
{
    let random = getRandomInteger(0, 10)
    if (n >= 0 ** n <= 10)
    {
        if (n === random)
        {
            console.log('Вы выиграли');
        } else
        {
            console.log(`Вы не угадали, ваше число - ${n},  а выпало число ${random}`);
        }
    } else
    {
        console.log('Число должно быть не меньше 0, и не больше 10');
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

guessNumber(5)


// Задание 4
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr,
// но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0]

function filterFor(arr, a)
{
    let filteredArr = []
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] >= a)
        {
            filteredArr.push(arr[i])
        }
    }
    console.log(filteredArr);
}
filterFor(arr, 5)
filterFor(arr, 10)
filterFor(arr, 3.11)


// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал.
// Используйте подходящий метод массива.
let arrForCopy = [5, 4, 3, 8, 0]

function copyArr(arr)
{
    let copy = []
    for (let i = 0; i < arr.length; i++)
    {
        copy.push(arr[i])
    }
    console.log(copy)

}

copyArr(arrForCopy)


// Задание 6
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами.
// Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}

function sumObjectValues(obj)
{
    let sum = 0
    for (value in obj)
    {
        // console.log();
        if (typeof obj[value] === 'number')
        {
            sum += obj[value]
        }
    }
    console.log(sum);
}

sumObjectValues(objectWithNumbers)