const hamburger = document.querySelector('.hamburger'),
      aside = document.querySelector('.aside'),
      main = document.querySelector('.main'),
      closeBtn = aside.querySelector('.nav__close')

hamburger.addEventListener('click', () =>
{
    aside.classList.add('aside__move')
    main.classList.add('main__move')
    hamburger.classList.add('hamburger__closed')
})

closeBtn.addEventListener('click', () =>
{
    aside.classList.remove('aside__move')
    main.classList.remove('main__move')
    hamburger.classList.remove('hamburger__closed')
})