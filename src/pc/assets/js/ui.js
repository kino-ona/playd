window.addEventListener('scroll', () => {
	const header = document.querySelector('#header');
	let sct = window.pageYOffset;
	let threshold = 300;
	sct > threshold ? header.classList.add('scrolled') : header.classList.remove('scrolled') ;
})
