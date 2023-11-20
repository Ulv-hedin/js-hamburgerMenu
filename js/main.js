const btnBurger = document.querySelector('.burger')
const bars = document.querySelector('.fa-bars')
const times = document.querySelector('.fa-times')
const ulList = document.querySelector('ul')

const show = () => {
	ulList.classList.toggle('active')
	btnBurger.classList.toggle('active')
	bars.classList.toggle('hide')
	times.classList.toggle('hide')
}

btnBurger.addEventListener('click', show)
