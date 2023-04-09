const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu__active')
    hamburger.classList.toggle('hamburger-active')
})

// Toggle Dark Mode and Light Mode
const toggle = document.querySelector('.toggle'),
      mode = toggle.querySelector('.light-mode'),
      a = document.querySelectorAll('a'),
      li = document.querySelectorAll('li'),
      span = document.querySelectorAll('.hamburger span'),
      p = document.querySelectorAll('p'),
      telIcon = document.querySelector('.header__contacts-icon path')

toggle.addEventListener('click', () =>
{
    toggle.classList.toggle('toggle-changed')

    if (mode.classList.contains('dark-mode'))
    {
        mode.classList.remove('dark-mode')
        mode.classList.add('light-mode')
        document.body.classList.remove('dark')
        a.forEach(link =>
        {
            link.classList.remove('dark')
        })
        li.forEach(link =>
        {
            link.classList.remove('dark')
        })
        p.forEach(link =>
        {
            link.classList.remove('dark')
        })
        span.forEach(span =>
        {
            span.classList.remove('dark')
        })
        menu.classList.remove('dark')
        telIcon.classList.remove('dark')
    } else
    {
        mode.classList.remove('light-mode')
        mode.classList.add('dark-mode')
        document.body.classList.add('dark')
        a.forEach(link =>
        {
            link.classList.add('dark')
        })
        li.forEach(link =>
        {
            link.classList.add('dark')
        })
        p.forEach(link =>
        {
            link.classList.add('dark')
        })
        span.forEach(span =>
        {
            span.classList.add('dark')
        })
        menu.classList.add('dark')
        telIcon.classList.add('dark')
    }
})
