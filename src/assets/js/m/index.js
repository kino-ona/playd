(function () {

	//visual
	const visualSrc = document.querySelector('.visual__image .image');

	if(visualSrc) {
		const visual = document.querySelector('.visual');
	  const visualImages = document.querySelectorAll('.visual__image .image');
  	let i = 0;

		visualImages[0].style.opacity = 1;

		const setKv = () => {
			i++;
			visualImages.forEach(() => {
				if (i === visualImages.length) {
					visualImages.forEach((item) => {item.style.opacity = 0;})
				
					visualImages[0].style.opacity = 1;
					i = 0;
				} else {
					if(i === 0) {

					} else {visualImages[i-1].style.opacity = 0;}
					visualImages[i].style.opacity = 1;
				}
			})
		};
  
		const stopKv = () => {
			clearInterval(timer);
		}
		const timer = setInterval(setKv, 1750);
		// setTimeout(stopKv, 9800);
	
		
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