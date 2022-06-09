(function () {

	//visual
	const visualSrc = document.querySelector('.visual__image img');

	if(visualSrc) {
	  const visual = document.querySelectorAll('.visual__image .image');
  	let i = 0;

		const setKv = () => {
			i++;
			visual.forEach(() => {
				visual[i].classList.add('active')
			});
		};
  
		const stopKv = () => {
			clearInterval(timer);
		}
		const timer = setInterval(setKv, 900);
		setTimeout(stopKv, 10000);
	
		
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