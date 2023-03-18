// Menu Burger
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

// Tabs
const tabsParent = document.querySelector('.tabs-container'),
      tabs = tabsParent.querySelectorAll('.tabs-item'),
      tabsContent = document.querySelectorAll('.portfolio__projects')

function hideTabContent()
{
    tabsContent.forEach(item =>
        {
            item.classList.add('hide')
            item.classList.remove('show')
        })

    tabs.forEach(item =>
        {
            item.classList.remove('tabs-item__active')
        })
}

function showTabContent(i = 0)
{
    tabsContent[i].classList.add('show')
    tabsContent[i].classList.remove('hide')
    tabs[i].classList.add('tabs-item__active')
}

hideTabContent()
showTabContent()

tabsParent.addEventListener('click', (e) =>
{
    const target = e.target

    if (target && target.classList.contains('tabs-item'))
    {
        tabs.forEach((item, i) =>
            {
                if (target == item)
                {
                    hideTabContent()
                    showTabContent(i)
                }
            })
    }
})