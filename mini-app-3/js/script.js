const hamburger = document.querySelector('.hamburger'),
      hamburgerContent = document.querySelector('.hamburger__content'),
      closeBtn = document.querySelector('.close')

hamburger.addEventListener('click', () =>
{
    closeBtn.style.display = 'block'
    hamburger.style.display = 'none'
    hamburgerContent.style.display = 'block'
})

closeBtn.addEventListener('click', () =>
{
    closeBtn.style.display = 'none'
    hamburgerContent.style.display = 'none'
    hamburger.style.display = 'block'
})