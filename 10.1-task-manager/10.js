// Задание 1
// 1) Сделать код таск-менеджера из прошлого урока более читаемым,
// разбив его на отдельные функции.
// Например, самый простой вариант:
// по сабмиту формы после preventDefault должна вызываться функция createLi(text),
// которая как параметр принимает текст заметки, создает li и наполняет его.
// 2) Добавить кнопку, которая помечает все задачи как сделанные.
// Добавить тег button в html код и повесить на него обработчик события click.
// В обработчике найти все существующие теги li при помощи функции document.querySelectorAll
// В цикле или с помощью forEach обойти найденные в пункте теги li.
// Каждому проставить li.style.textDecoration = 'line-through';
// 3) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.

const form = document.querySelector('.add'),
      input = form.querySelector('.add__input'),
      addBtn = form.querySelector('.add__btn'),
      tasks = document.querySelector('.tasks')

let counter = 0
addBtn.addEventListener('click', (e) =>
{
    counter++
    e.preventDefault()
    let li = document.createElement('li')

    createLi(input.value, li)


    li.children[0].addEventListener('change', lineThrough)
    li.children[1].addEventListener('click', removeTask)

    localStorage.setItem(counter, input.value)
    input.value = ''
})

function createLi(value, li)
{
    // let li = document.createElement('li')
    li.innerHTML = `
        <input type="checkbox" name="checkbox" class="checkbox">
        ${value}
        <button class="delete__btn">&times;</button>
    `

    tasks.append(li)
}

function lineThrough(li, event)
{
    if (event.target.checked)
    {
        tasks.insertBefore(li, tasks.children[tasks.children.length + 1])
        // li.remove()
        // tasks.append(li)
        li.style.textDecoration = 'line-through'
    } else
    {
        tasks.insertBefore(li, tasks.children[0])
        li.style.textDecoration = 'none'
    }
}

function removeTask(li)
{
    li.remove()
}