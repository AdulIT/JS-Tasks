const modal = document.querySelector('.modal'),
      recallBtn = document.querySelector('#recall'),
      modalCloseBtn = modal.querySelector('.modal__close')

recallBtn.addEventListener('click', openModal)

modalCloseBtn.addEventListener('click', closeModal)

window.addEventListener('click', (e) =>
{
    if (e.target === modal)
    {
        closeModal()
    }
})
window.addEventListener('keydown', (e) =>
{
    if (e.code === 'Escape')
    {
        closeModal()
    }
})

function openModal()
{
    modal.classList.add('open')
}

function closeModal()
{
    modal.classList.remove('open')
}