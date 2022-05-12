
//stickyHeader
const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
	let sct = window.pageYOffset;
	let threshold = 10;

	sct > threshold ? header.classList.add('scrolled') : header.classList.remove('scrolled') ;
})

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

//layerPopup
let isOpen = false;
const layerOpen = (layerId) =>{
	let curPos = window.pageYOffset;
	console.log(curPos);
	document.documentElement.classList.add("noscroll");
	document.querySelector('#' + layerId).classList.add("is-visible");
	let layerID = document.querySelector('#' + layerId);
	layerID.setAttribute('aria-hidden', 'false');
	if(document.querySelector('[role="dialog"].is-visible') && isOpen == false) {
		isOpen = true;
	}
	const delay = setTimeout( function() {
		if(!document.documentElement.classList.contains('noscroll')){
			document.documentElement.classList.add('noscroll');
		}
		clearTimeout(delay);
	}, 50);
}
const layerClose = (layerId) => {
	let curPos = -(parseInt(document.querySelector(".popup").pageYOffset));
	document.querySelector('#' + layerId).classList.remove("is-visible");
	document.querySelector('#' + layerId).setAttribute('aria-hidden', 'true');
	document.documentElement.classList.remove("noscroll");
	if (document.querySelector('[role="dialog"].is-visible')) {
		document.documentElement.classList.remove("noscroll");
		window.scrollTop = curPos;
		isOpen = false;
	}
}

const gnbButton = document.querySelector('.header__button');
const gnb = document.querySelector('.gnb');
const body = document.querySelector('body');

gnbButton.addEventListener('click', (item) => {
	if (body.classList.contains('open-gnb')) {
		body.classList.remove('open-gnb');
	} else {
		gnb.classList.add('open-gnb');
		body.classList.add('open-gnb');
	}



})