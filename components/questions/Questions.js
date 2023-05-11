class Questions{
    addListener() {
        document.addEventListener('click', function(event) {
            let vector = event.target
            if(!vector.hasAttribute('data-vector')) return
            let target = vector.parentNode.nextElementSibling
            target.classList.toggle('hidden')
            if(target.classList.contains('hidden')) {
                vector.style.transform = 'rotate(0deg)'
            } else {
                vector.style.transform = 'rotate(-180deg)'
            }
        })
    }
};

export default new Questions();