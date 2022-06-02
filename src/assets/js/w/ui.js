//Header
const header = document.querySelector('header#header');
window.addEventListener('scroll', () => {
	let scT = window.pageYOffset;
	const container = document.querySelector('#container');
	const abTcontainer =  container.getBoundingClientRect().top;
	setTimeout((delay) => {
		scT > abTcontainer*0.9 ? header.classList.add('header--scrolled') : header.classList.remove('header--scrolled') ;
		clearTimeout(delay);
	}, 50);
})

window.addEventListener('load', () => {
	
	//HeaderNav
	const nav = document.querySelector('header#header nav.nav');
	const navLinks = document.querySelectorAll('#header nav.nav .nav__link');
	const navmenu = document.querySelector('header#header .navmenu');
	const navmenuList = document.querySelectorAll('header#header .navmenu .navmenu__list');

	navLinks.forEach((item) => {
		let itemIdx = parseInt(1 + Array.from(item.parentElement.querySelectorAll('.nav__link')).indexOf(item));
		let targetNavmenuList = navmenu.querySelector('.navmenu__list:nth-of-type(' + itemIdx + ')');
		let targetNavLink = nav.querySelector('.nav__link:nth-of-type(' + itemIdx + ')');

		const navmenuListPos = () => {
			for (let i=0;i<(navmenuList.length);i++) {
				if (i === (itemIdx - 1)) {
					let elemWdL = navLinks[i].querySelector('a').getBoundingClientRect().left;
					targetNavmenuList.style.left = elemWdL + 'px';
				} 
			}
		}
		navmenuListPos();

		window.addEventListener('resize', () => {
			navmenuListPos();
		})

		item.addEventListener('mouseenter', () => {
			if (itemIdx > 5){
				navmenu.style.top = 0;
			} else {
				targetNavLink.classList.add('located');
				navmenu.style.top = `calc(100% + 1px)`;
				targetNavmenuList.style.display = `flex`;
			}
		})

		item.addEventListener('mouseleave', () => {
			targetNavmenuList.style.display = `none`;
			targetNavLink.classList.remove('located');
			nav.addEventListener('mouseleave', () => {
				navmenu.style.top = 0;
				targetNavLink.classList.remove('located');
			})
			targetNavmenuList.addEventListener('mouseleave', () => {
				navmenu.style.top = 0;
				targetNavLink.classList.remove('located');
			});
		});

		targetNavmenuList.addEventListener('mouseenter', () => {
			targetNavLink.classList.add('located');
			navmenu.style.top = `calc(100% + 1px)`;
			targetNavmenuList.style.display = `flex`;
		});

		targetNavmenuList.addEventListener('mouseleave', () => {
			targetNavLink.classList.remove('located');
			navmenu.style.top = 0;
			targetNavmenuList.style.display = `none`;
		});
	})

	//subTab
	const subTabLinks = document.querySelectorAll('.sub-tabs a');
	const subContainer = document.querySelectorAll('.sub-container');

	subTabLinks.forEach((item) => {
		item.addEventListener('click', (event) => { 
			event.preventDefault();
			document.querySelectorAll('.sub-container').forEach((target) => {
				target.classList.remove('sub-container--located');
			})
			for (let i=0;i<subContainer.length;i++) {
				if (subContainer[i].dataset.content === item.innerText){
					subContainer[i].classList.add('sub-container--located');
				} 
			}
			subTabLinks.forEach(element => {
				element.classList.contains('sub-tabs__item--active') ? element.classList.remove('sub-tabs__item--active') : null;
			});
			item.classList.add('sub-tabs__item--active');
		});
	})

	//accordion

	const accordionItems = document.querySelectorAll('.accordian__item');

	accordionItems.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			if(item.classList.contains('accordian__item--active')) {
				item.classList.remove('accordian__item--active');
			} else {
				item.classList.add('accordian__item--active');
			}
		})
	})

	//subCateTab
	const subCateTabLinks = document.querySelectorAll('.sub-list-category__default p a');
	const subCateContainer = document.querySelectorAll('.sub-list-category-container');

	subCateTabLinks.forEach((item) => {
		item.addEventListener('click', (event) => { 
			event.preventDefault();
			document.querySelectorAll('.sub-list-category-container').forEach((target) => {
				target.classList.remove('sub-list-category-container--located');
			})
			for (let i=0;i<subCateContainer.length;i++) {
				if (subCateContainer[i].dataset.content === item.innerText){
					subCateContainer[i].classList.add('sub-list-category-container--located');
				} 
			}
			subCateTabLinks.forEach(element => {
				element.classList.contains('sub-list-category__item--active') ? element.classList.remove('sub-list-category__item--active') : null;
			});
			item.classList.add('sub-list-category__item--active');
		});
	})

	//subIN-PageTab
	const subInpageTabLinks = document.querySelectorAll('.sub-list-category__inpage p a');

	subInpageTabLinks.forEach((item) => {
		item.addEventListener('click', (event) => { 
			event.preventDefault();
			subInpageTabLinks.forEach(element => {
				element.classList.contains('sub-list-category__item--active') ? element.classList.remove('sub-list-category__item--active') : null;
			});
			item.classList.add('sub-list-category__item--active');
			for (let i=0;i<accordionItems.length;i++) {
				accordionItems[i].classList.remove('accordian__item--active');
				if (accordionItems[i].querySelector('.accordian__title > a').innerText === item.innerText){
					accordionItems[i].classList.add('accordian__item--active');
				} 
			}
		});
	})

	//sublistItemsAccordion
	const sublistItems =  document.querySelectorAll('.sub-list .sub-list__item');
	const sublistItemTitles =  document.querySelectorAll('.sub-list .sub-list__item .sub-list__title');
	const subCateItems = document.querySelectorAll('.sub-list-category__inpage .sub-list-category__item');

	const CleanTargetClassName = () => {
		sublistItems.forEach(targets => { targets.classList.remove('sub-list__item--active');})
		subCateItems.forEach(targets => { targets.classList.remove('sub-list-category__item--active');})
	}

	sublistItemTitles.forEach(item => {
		item.addEventListener('click' , () => {
			let result1 = item.parentElement.classList.contains('sub-list__item--active');
			let targetChapter = item.parentElement.classList[1].split('--')[1];
			let targetCate = document.querySelector('.sub-list-category__item--' + targetChapter);
			let result2 = targetCate.classList.contains('sub-list-category__item--active');

			if (result1 && result2) {
				CleanTargetClassName();
			} else {
				CleanTargetClassName();
				item.parentElement.classList.add('sub-list__item--active');
				targetCate.classList.add('sub-list-category__item--active');
			}
		})
	})

	subCateItems.forEach(item => {
		item.addEventListener('click' , () => {
			let result1 = item.classList.contains('sub-list-category__item--active');
			let targetChapter = item.classList[1].split('--')[1];
			let targetListItem = document.querySelector('.sub-list__item--' + targetChapter);
			let result2 = targetListItem.classList.contains('sub-list__item--active');

			if (result1 && result2) {
				CleanTargetClassName();
			} else {
				CleanTargetClassName();
				item.classList.add('sub-list-category__item--active');
				targetListItem.classList.add('sub-list__item--active');
			}
		})
	})

	//sublistItemsAccordion ClickToScroll
	for (let i=0;i<sublistItems.length;i++) {
		let abTtargetItem = [];
		
		const ClickToScroll = () => {
			abTtargetItem[i] = parseFloat(sublistItemTitles[i].offsetTop - 90);
			window.scrollTo({ top: abTtargetItem[i], behavior: "smooth" });

			// console.log(abTtargetItem);
			// console.log(abTtargetItem[i]); ---> [1089, 978, 867, 756, 645, 534]
		}

		subCateItems[i].addEventListener('click' , () => {ClickToScroll();})
		sublistItemTitles[i].addEventListener('click' , () => {ClickToScroll();})
	}

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
	const dropBoxItem = document.querySelectorAll('.drop-box__wrap a');

	dropBox.forEach((item) => {
		item.addEventListener('click', () => {
			if(item.closest('.drop-box').classList.contains('drop-box--active')) {
				item.closest('.drop-box').classList.remove('drop-box--active')
			} else {
				item.closest('.drop-box').classList.add('drop-box--active')
			}
		})
	})

	dropBoxItem.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			item.closest('.drop-box__wrap').parentElement.querySelector('.drop-box__title').innerHTML = item.innerHTML;
		})
	})
});

//layerPopup
let isOpen = false;
const layerOpen = (layerId) =>{
	let curPos = window.pageYOffset;
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