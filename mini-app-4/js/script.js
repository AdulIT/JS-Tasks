const input = document.querySelector('.add__input'),
      addBtn = document.querySelector('.add__btn'),
      tasks = document.querySelector('.tasks')

addBtn.addEventListener('click', () =>
{
    // console.log(taskName);
    const li = document.createElement('li')
    li.innerHTML = `
            <input type="checkbox" name="checkbox" class="checkbox">
            ${input.value}
            <button class="delete__btn">&times;</button>
    `

    tasks.append(li)
    input.value = ''
    console.log(li.children[0])
    
    li.children[0].addEventListener('change', (event) =>
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
    })
    li.children[1].addEventListener('click', () =>
    {
        li.remove()
    })
})
