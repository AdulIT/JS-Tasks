const hamburger = document.querySelector('.hamburger'),
      closeBtn = document.querySelector('.close'),
      menu =  document.querySelector('.menu')


hamburger.addEventListener('click', () =>
{
    menu.style.display = 'block'
    closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () =>
{
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
})