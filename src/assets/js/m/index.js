(function () {

	//visual
	const visualSrc = document.querySelector('.visual__image img');

	if(visualSrc) {
		let getVisualSrc = visualSrc.getAttribute('src');
		let visualSrcName = getVisualSrc.split('.')[0];
		let i = 0;
	
		const setVisual = () => {
			i++;
			visualSrcName = 'img_visual_' + i  + '.png'
			visualSrc.setAttribute('src', '../assets/images/m/visual/' + visualSrcName);
		}
	
		const stopVisual = () => {
			clearInterval(timer);
		}
	
		const timer = setInterval(setVisual, 300);
		setTimeout(stopVisual, 1600);
	
		
		//aos
		AOS.init();
		
	
		//count
		const boxoffsetTop = document.querySelector('.box-item--right').offsetTop - document.querySelector('.box-item--right').clientHeight;
		const countUp1 = document.querySelectorAll('.card-box__content p > span')[0];
		const countUp2 = document.querySelectorAll('.card-box__content p > span')[1];
		const countUp3 = document.querySelectorAll('.card-box__content p > span')[2];
		const options = {
			duration: 10,
		}
		const count1 = new countUp.CountUp(countUp1, 123456, options);
		const count2 = new countUp.CountUp(countUp2, 3424, options);
		const count3 = new countUp.CountUp(countUp3, 39342, options);
		
	
		window.addEventListener('scroll', () => {
			if(window.scrollY > boxoffsetTop) {
				setTimeout(() => {
					count1.start();
					count2.start();
					count3.start();
				},1000)
			}
		})
	
	
	
	
		//swiper
		let swiper = new Swiper(".sectionSwiper", {
			slidesPerView: "auto",
		 });
	
	}
})();