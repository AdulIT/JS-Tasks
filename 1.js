// 1
// Запросите у пользователя его имя.
// Выведите в окошке (с помощью функции alert) фразу: Привет, Николай!
// (вместо Николай должно показываться имя, которое ввел пользователь)

const name = prompt('Введите имя ', '')
alert(`Hello ${name}`)

// 2
// Запросите у пользователя число. Затем запросите степень, в которую нужно возвести это число.
// Выведите в консоль результат.

const num = +prompt('Number ', '')
const degree = +prompt('Degree', '')
console.log(num ** degree)

// 5
// Создать произвольную переменную, присвоить ей произвольное строковое значение.
// C помощью if написать условие: если переменная равна “hidden”,
// присвоить ей значение “visible”, иначе - “hidden”.

let randomVar = 'random'
if (randomVar === 'hidden')
{
    randomVar = 'visible'
} else
{
    randomVar = 'hidden'
}
console.log(randomVar)

// 6
// Создать переменную и присвоить ей число.
// Записать условие:
// - если переменная равна нулю, присвоить ей 1;
// - если меньше нуля - строку “less then zero”;
// - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let variable = -0.6

if (variable === 0)
{
    variable = 1
} else if (variable < 0)
{
    variable = 'less then zero'
} else if (variable > 0)
{
    variable *= 10
}
console.log(variable)

// 7
// Запросите у пользователя число и запишите его в переменную. 
// (Не забывайте, что от пользователя мы всегда получаем строку).
// Создайте переменную-результат и присвойте ей значение: если введенное пользователем число меньше 5,
// то результат будет '0', если больше -  '1'. Выведите результат в консоль.

const userNum = +prompt('Input the number', '')
let result
if (userNum < 5)
{
    console.log('0')
} else if (userNum > 5)
{
    console.log('1')
}

// 8
// Попросить пользователя ввести одно число, следом - второе число.
// Вывести в консоль максимальное из чисел (наибольшее) с текстом:
// Большее число: 7 (вместо 7 будет максимальное число из введенных пользователем).
// * предусмотреть вариант ввода одинаковых чисел 

const num1 = +prompt('Input the first num')
const num2 = +prompt('Input the second num')

if ( num1 > num2 )
{
    console.log(num1)
} else if ( num1 === num2 )
{
    console.log(num1)
} else
{
    console.log(num2)
}

// 9
// Определить, является ли введенное пользователем число num1 кратным введенному числу num2.
// Обе переменные запрашиваем у пользователя, ответ выводим в консоль.

const num3 = +prompt('Input the first num')
const num4 = +prompt('Input the second num')

if (num3 % num4 == 0)
{
    console.log('Yes')
} else
{
    console.log('No')
}

// // 10
// Запросить у пользователя средний балл, записать в переменную.
// Если средний балл 1-4 - вывести в консоль "Двоечник, иди учись!",
// если 5-8 - "Неплохо, но давай еще поднажмем!", если 9-10 - "Ого, да ты настоящий отличник!"
// (можно другие фразы - по желанию).

const averagePoint = +prompt('Average points')
if (averagePoint >= 1 && averagePoint <= 4)
{
    console.log('Двоечник, иди учись!')
} else if (averagePoint >= 5 && averagePoint <= 8)
{
    console.log('Неплохо, но давай еще поднажмем!')
} else if (averagePoint >= 9 && averagePoint <= 10)
{
    console.log('Ого, да ты настоящий отличник!')
}


// 11
// Запросить у пользователя ответы на 2 вопроса:
// - балл за экзамен (от 0 до 100)
// - количество выполненных проектов (от 0 и больше)
// Вывести в консоль общий выпускной балл в соответствии с этими значениями:
// - 100, если балл за экзамен более 90 или количество проектов более 10.
// - 90, если балл за экзамен более 75 и количество проектов не менее 5.
// - 75, если балл за экзамен более 50 и количество проектов не менее 2.
// - 0 во всех других случаях.

const score = +prompt('Score for exam')
const projects = +prompt('Projects number')

if (score >= 90 || projects > 10)
{
    console.log(100)
} else if (score >= 75 && projects >= 5)
{
    console.log(90)
} else if (score >= 50 && projects >= 2)
{
    console.log(75)
} else
{
    console.log(0)
}

// 12
// День аренды автомобиля стоит $40. При аренде на 7 или больше дней вы получаете общую итоговую скидку $50.
// Если вы арендуете авто на 3 или более дней, ваша общая скидка составит $20.

// Количество дней, на которые нужно арендовать авто, запрашиваются с помощью prompt.
// Напишите программу, рассчитывающую общую стоимость аренды на запрашиваемое количество дней.

const autoRentDays = +prompt('Quantity days that you need to rent the car')

const oneDayRent = 40
const maxDiscount = 50
const minDiscount = 20

let totalRent

if (autoRentDays >= 7 )
{
    totalRent = (autoRentDays * oneDayRent) - maxDiscount
} else if (autoRentDays >= 3 && autoRentDays < 7)
{
    totalRent = (autoRentDays * oneDayRent) - minDiscount
} else
{
    totalRent = autoRentDays * oneDayRent
}

console.log(totalRent)