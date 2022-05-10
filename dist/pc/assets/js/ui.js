
//stickyHeader
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
	let sct = window.pageYOffset;
	let threshold = 300;

	sct > threshold ? header.classList.add('scrolled') : header.classList.remove('scrolled') ;
})

//inputButton
const inputButton = document.querySelectorAll('.input__button');

inputButton.forEach((item) => {
	item.addEventListener('click', () => {
		if(item.classList.contains('input__button--active')) item.classList.remove('input__button--active')
		else item.classList.add('input__button--active');
	});
});

//dropdown
const dropBox = document.querySelectorAll('.drop-box');
const dropBoxWrap = document.querySelectorAll('.drop-box__wrap');

dropBox.forEach((item) => {
	item.addEventListener('click', () => {
		if(item.classList.contains('drop-box--active')) {
			item.classList.remove('drop-box--active')
		} else {
			item.classList.add('drop-box--active')
		}
	})
})