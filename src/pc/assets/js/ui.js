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
const dropBoxItem = document.querySelectorAll('.drop-box__wrap a');
const dropBoxTitle = document.querySelector('.drop-box__title');

dropBox.forEach((item) => {
	item.addEventListener('click', () => {
		if(item.classList.contains('drop-box--active')) {
			item.classList.remove('drop-box--active')
		} else {
			item.classList.add('drop-box--active')
		}
	})
})

dropBoxItem.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		dropBoxTitle.innerHTML = item.innerHTML;
	})
})


//tab
const subTabs = document.querySelectorAll('.sub-tabs a');

subTabs.forEach((item) => {
	item.addEventListener('click', (event) => { 
		event.preventDefault();
		subTabs.forEach(element => {
			element.classList.contains('sub-tabs__item--active') ? 
			element.classList.remove('sub-tabs__item--active') : null;
		});
			
		item.classList.add('sub-tabs__item--active');
	});

})

const accordionItem = document.querySelectorAll('.accordian__item');
accordionItem.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		if(item.classList.contains('accordian__item--active')) {
			item.classList.remove('accordian__item--active')
		} else {
			item.classList.add('accordian__item--active')
		}
	})
})






