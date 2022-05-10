'use strict';
/* accordion */

class Accordion {
	constructor(heading) {
		this.heading = heading;
	}
	
	allowOne() {
		const accordionHeading = document.querySelectorAll(this.heading);

		accordionHeading.forEach((item, key) => {
			item.addEventListener('click', () => { 
				accordionHeading.forEach(element => {
					element.classList.contains('accordion__header--active') ? 
					element.classList.remove('accordion__header--active') : null;
				});
					
				item.classList.add('accordion__header--active');
			});
		});
	}
	
	allowMulti() {
		const accordionHeading = document.querySelectorAll(this.heading);

		accordionHeading.forEach((item, key) => {
			item.addEventListener('click', () => { 
				item.classList.contains('accordion__header--active') ? 
				item.classList.remove('accordion__header--active') :            
				item.classList.add('accordion__header--active');
			});
		});
	}
}

const accordion = new Accordion('.accordion__header');
accordion.allowMulti();


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






