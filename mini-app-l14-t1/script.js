const tabsParent = document.querySelector('.tabs__header'),
      tabs = tabsParent.querySelectorAll('.tabs__item'),
      tabsContent = document.querySelectorAll('.tabs__content')

function hide()
{
    tabs.forEach(tab =>
    {
        tab.classList.remove('active')
    })

    tabsContent.forEach(item =>
    {
        item.classList.remove('show')
        item.classList.add('hide')
    })
}

hide()

function show(i = 0)
{
    tabsContent[i].classList.remove('hide')
    tabsContent[i].classList.add('show')
    tabs[i].classList.add('active')
}
show()

tabsParent.addEventListener('click', (e) =>
{
    const target = e.target

    if (target && target.classList.contains('tabs__item'))
    {
        tabs.forEach((tab, i) =>
            {
                if (target == tab)
                {
                    hide()
                    show(i)
                }
            })
    }
})