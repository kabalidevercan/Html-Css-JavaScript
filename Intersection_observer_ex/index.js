
const cardContainer = document.querySelector('.card:last-child')
const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show',entry.isIntersecting)
         
    })
    
},
{
    threshold: 0.9,
}
)

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0]
    if(!lastCard.isIntersecting) return
    loadNewCards()
    lastCardObserver.unobserve(lastCard.target)
    lastCardObserver.observe(document.querySelector('.card:last-child'))

}, {}

)

lastCardObserver.observe(document.querySelector('.card:last-child'))

cards.forEach(card => {
    observer.observe(card)
})




function loadNewCards () {
    for(let i = 0; i < 10; i++) {
        const card = document.createElement('div')
        card.textContent = 'New Card'
        card.classList.add('card')
        observer.observe(card)
        cardContainer.append(card)
    }
}
