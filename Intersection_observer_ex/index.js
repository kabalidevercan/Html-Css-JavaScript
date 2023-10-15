const targets = document.querySelectorAll('.boxs')
let container  = document.getElementById('container')



const callback = (entries) => {
    for(let entry of entries){    
        entry.target.classList.toggle('active',entry.isIntersecting)
    }
}

const options = {
    threshold : 0.5
}

const observer = new IntersectionObserver(callback,options)

targets.forEach((box) => observer.observe(box))