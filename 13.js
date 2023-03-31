// Задание 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.
class Constructor
{
    constructor(obj)
    {
        this.obj = obj
    }

    returnObj()
    {
        console.log(this.obj)
    }
}

const obj = new Constructor({name: 'Alex', age: 20})
obj.returnObj()

// Задание 2
// Создайте класс Calculator, который создаёт объекты с конструктором,
// который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта,
// и двумя методами:

// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств

class Calculator
{
    constructor()
    {
        this.a = +prompt('a:')
        this.b = +prompt('b:')
    }

    sum()
    {
        return this.a + this.b
    }
    mul()
    {
        return this.a * this.b
    }
}

const calc = new Calculator()
console.log(calc.sum())
console.log(calc.mul())