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