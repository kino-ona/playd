window.addEventListener('load', () => {
	
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
	
	//HeaderNav
	const nav = document.querySelector('header#header nav.nav');
	const navLinks = document.querySelectorAll('#header nav.nav .nav__link');
	const navmenu = document.querySelector('header#header .navmenu');
	const navmenuList = document.querySelectorAll('header#header .navmenu .navmenu__list');

	const sitemap = document.querySelector('#sitemap');
	const sitemapOpeners = [nav.querySelector('.nav__gnb'), sitemap.querySelector('.sitemap__close')];

	sitemapOpeners.forEach((items) => {
		items.addEventListener('click', (event) => {
			event.preventDefault;
			const docBody = document.querySelector('body');
			let currBodyStatus = docBody.classList.contains('noscroll');
			let currStatus = sitemap.classList.contains('sitemap__is-visible');
			currBodyStatus ? docBody.classList.remove('noscroll') : docBody.classList.add('noscroll');
			currStatus ? sitemap.classList.remove('sitemap__is-visible') : sitemap.classList.add('sitemap__is-visible');
		})
	})

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

		window.addEventListener('resize', () => {navmenuListPos();})

		item.addEventListener('mouseenter', () => {
			if (itemIdx > 4){
				navmenu.style.top = 0;
			} else {
				targetNavLink.classList.add('located');
				navmenu.style.top = `calc(100% + 1px)`;
				targetNavmenuList.style.display = `flex`;
			}
		})

		item.addEventListener('mouseleave', () => {
			targetNavmenuList.style.display = `none`;
			navmenu.style.top = 0;
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
	const accordionItems = document.querySelectorAll('.accordian:not(.toggle-accordian) .accordian__item');

	accordionItems.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			item.classList.contains('accordian__item--active') ? item.classList.remove('accordian__item--active') : item.classList.add('accordian__item--active');
		})
	})

	const toggleAccordionItems = document.querySelectorAll('.accordian.toggle-accordian .accordian__item');
	const toggleAccordionToggle = document.querySelector('.accordian.toggle-accordian .accordian__item .accordian__title');

	toggleAccordionItems.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			return;
		})
		toggleAccordionToggle.addEventListener('click', (event) => {
			event.preventDefault();
			item.classList.contains('accordian__item--active') ? item.classList.remove('accordian__item--active') : item.classList.add('accordian__item--active');
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
			// console.log(abTtargetItem[i]); ---> [1089, 978, 867, 756, 645, 534]
			window.scrollTo({ top: abTtargetItem[i], behavior: "smooth" });
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


// Input * Form * Swiper
const bodyClass = document.querySelector('body').classList[0];

if(bodyClass) {

	const formFileButton = document.querySelector('#form-file-button');
	const formFileIput = document.querySelector('#form-file-text');

	const formSubmit = document.querySelector('.form-submit');
	const needCheck = document.querySelector('#sub-checkbox--personal');
			
	const ButtonCloses = document.querySelectorAll('.close');

	// File-Attaching Button
	const InputFileAttaching = () => {
		if (formFileButton === null) return;
		else formFileButton.addEventListener('change', () => {
			if(!formFileIput.value) {
				formFileIput.closest('.input-box--file').classList.remove('warning')
			}
			formFileIput.value = formFileButton.files[0].name
		});
	}

	// Necessary Check
	const CheckboxNeededCheck = () => {
		if (needCheck === null) return;
		else needCheck.addEventListener('change', () => {
			needCheck.checked ? formSubmit.classList.add('submit--active') : formSubmit.classList.remove('submit--active');
		})	
	}

	// All .close UI
	const LayerCloseClicker = () => {
		if (ButtonCloses === null) return;
		else ButtonCloses.forEach((item) => {
			item.addEventListener('click' , (event) => { 
				let CurrentPopup = document.querySelector('.popup.is-visible').getAttribute('id');
				layerClose(CurrentPopup); 
			})
		})
	}

	switch(bodyClass) {

		case 'main':{
			const swiperOptions = {
				loop: true,
				spaceBetween: 20,
				autoplay: {
					delay: 1,
					disableOnInteraction: false
				},
				slidesPerView: 'auto',
				speed: 12000,
				grabCursor: true,
				mousewheelControl: true,
				keyboardControl: true,
				observer: true,
				observeParents: true,
			};
			const swiper = new Swiper("#swiper", swiperOptions);
		}
		break;

		case 'contact':{

			window.addEventListener('load', () => {
				InputFileAttaching();
				CheckboxNeededCheck();
				LayerCloseClicker();
			})

			const formUserDetail = document.querySelector('#form-detail');
			const formUserCompany  = document.querySelector('#user-company');
			const formUserName = document.querySelector('#user-name');
			const formUserNumber = document.querySelector('#user-number');
			const formUserMail = document.querySelector('#user-mail');
			const formUserUrl = document.querySelector('#user-url');
			const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
			
			formSubmit.addEventListener('click' , (event) => {
				event.preventDefault();

				document.querySelectorAll('.form-field').forEach((item) => {
					item.classList.remove('warning');
				})
				document.querySelector('.input-box--file').classList.remove('warning')

				

				if(!needCheck.checked) {
					needCheck.focus();
					return false;
				}

				if(formUserDetail.value === '') {
					formUserDetail.focus();
					formUserDetail.closest('.input-box--file').classList.add('warning')
					return false;
				}

				if(!formUserCompany.value) {
					formUserCompany.focus();
					formUserCompany.closest('.form-field').classList.add('warning')
					return false;
				}

				if(!formUserName.value) {
					formUserName.focus();
					formUserName.closest('.form-field').classList.add('warning')
					return false;
				}

				if(!formUserNumber.value) {
					formUserNumber.focus();
					formUserNumber.closest('.form-field').classList.add('warning')
					return false;
				}

				if(!formUserMail.value) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					return false;
				}

				if(!regEmail.test(formUserMail.value)) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					formUserMail.nextElementSibling.innerHTML = '질못된 입력값입니다';
					return false;
				}

				if(!formUserUrl.value) {
					formUserUrl.focus();
					formUserUrl.closest('.form-field').classList.add('warning')
					return false;
				}

				layerOpen('formSubmitted');
			})
		}
		break;

		case 'ethical':{

			// File-Attaching Button
			const InputFileAttaching = () => {
				if (formFileButton === null) return;
				else formFileButton.addEventListener('change', () => {
					if(!formFileIput.value) {
						formFileIput.closest('.input-box--file').classList.remove('warning')
					}
					formFileIput.value = formFileButton.files[0].name
				});
			}

			// Necessary Check
			const CheckboxNeededCheck = () => {
				if (needCheck === null) return;
				else needCheck.addEventListener('change', () => {
					needCheck.checked ? formSubmit.classList.add('submit--active') : formSubmit.classList.remove('submit--active');
				})
			}

			// All .close UI
			const LayerCloseClicker = () => {
				if (ButtonCloses === null) return;
				else ButtonCloses.forEach((item) => {
					item.addEventListener('click' , (event) => { 
						let CurrentPopup = document.querySelector('.popup.is-visible').getAttribute('id');
						layerClose(CurrentPopup); 
					})
				})
			}

			InputFileAttaching();
			CheckboxNeededCheck();
			LayerCloseClicker();

			const popLayers = document.querySelectorAll('.open.sub-content__title--link')
			
			popLayers.forEach((item) => {
				item.addEventListener('click' , (event) => { 
					layerOpen('termAgreePrivacy');
				})
			})
		}
		break;

		case 'letter':{

			window.addEventListener('load', () => {
				CheckboxNeededCheck();
				LayerCloseClicker();
			})

			const formOpener = document.querySelector('.open');
			const formSubmitButton = document.querySelector('.form-submit');
			const formUserName = document.querySelector('#user-name');
			const formUserProfession = document.querySelector('#user-profession');
			const formUserPosition = document.querySelector('#user-position');
			const formUserMail = document.querySelector('#user-mail');
			const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

			formSubmit.addEventListener('click' , () => {
				layerOpen('newsLetter');
			});

			document.querySelector('#letterFormSubmitted .layer__button.close').addEventListener('click' , () => {
				layerClose('newsLetter');
			});

			formOpener.addEventListener('click' , (event) => {
				event.preventDefault();
				layerOpen('newsLetter');
			});

			formSubmitButton.addEventListener('click' , (event) => {
				event.preventDefault();
				document.querySelectorAll('.form-field').forEach((item) => {
					item.classList.remove('warning');
				})
	
				if(!needCheck.checked) {
					needCheck.focus();
					return false;
				}
	
				if(!formUserName.value) {
					formUserName.focus();
					formUserName.closest('.form-field').classList.add('warning')
					return false;
				}
	
				if(!formUserProfession.value) {
					formUserProfession.focus();
					formUserProfession.closest('.form-field').classList.add('warning')
					return false;
				}	

				if(!formUserPosition.value) {
					formUserPosition.focus();
					formUserPosition.closest('.form-field').classList.add('warning')
					return false;
				}	
	
				if(!formUserMail.value) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					return false;
				}
	
				if(!regEmail.test(formUserMail.value)) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					formUserMail.nextElementSibling.innerHTML = '질못된 입력값입니다';
					return false;
				}

				layerOpen('letterFormSubmitted');
			})
		}
		break;

		case 'article':{
			(function () {
				let options = {};
				let slides = document.querySelectorAll("#swiper .swiper-slide");
				let navis = document.querySelectorAll('#swiper .swiper-button-prev, #swiper .swiper-button-next');
        if ( slides.length == 1 ) {
					swiperOptions = {
						loop: false,
						spaceBetween: 0,
						slidesPerView: '1',
						speed: 0,
						grabCursor: false,
						mousewheelControl: false,
						keyboardControl: false,
					},
					navis.forEach((item) => {
						item.style.display = `none`;
					})
        } else {
					swiperOptions = {
						loop: false,
						spaceBetween: 0,
						slidesPerView: '1',
						speed: 400,
						grabCursor: true,
						mousewheelControl: true,
						keyboardControl: true,
						observer: true,
						observeParents: true,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
						pagination: {
							el: '.swiper-pagination',
							type: 'fraction',
						},
					}
        }
				const swiper = new Swiper("#swiper", swiperOptions);
			}) ()

			window.addEventListener('load', () => {
				CheckboxNeededCheck();
				LayerCloseClicker();
			})

			const formOpener = document.querySelector('.open')
			const formUserName = document.querySelector('#user-name');
			const formUserProfession = document.querySelector('#user-profession');
			const formUserPosition = document.querySelector('#user-position');
			const formUserMail = document.querySelector('#user-mail');
			const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

			document.querySelector('#letterFormSubmitted .layer__button.close').addEventListener('click' , () => {
				layerClose('newsLetter');
			});

			formSubmit.addEventListener('click' , () => {
				layerClose('newsLetter');
				layerOpen('letterFormSubmitted');
			});

			formOpener.addEventListener('click' , (event) => {
				event.preventDefault();
				layerOpen('newsLetter');

				document.querySelectorAll('.form-field').forEach((item) => {
					item.classList.remove('warning');
				})
	
				if(!needCheck.checked) {
					needCheck.focus();
					return false;
				}
	
				if(!formUserName.value) {
					formUserName.focus();
					formUserName.closest('.form-field').classList.add('warning')
					return false;
				}
	
				if(!formUserProfession.value) {
					formUserProfession.focus();
					formUserProfession.closest('.form-field').classList.add('warning')
					return false;
				}	

				if(!formUserPosition.value) {
					formUserPosition.focus();
					formUserPosition.closest('.form-field').classList.add('warning')
					return false;
				}	
	
				if(!formUserMail.value) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					return false;
				}
	
				if(!regEmail.test(formUserMail.value)) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					formUserMail.nextElementSibling.innerHTML = '질못된 입력값입니다';
					return false;
				}
			})
		}
		break;

		case 'report':{
			
			window.addEventListener('load', () => {
				CheckboxNeededCheck();
				LayerCloseClicker();
			})

			const formOpener = document.querySelector('.button__icon-download');
			const formSubmitButton = document.querySelector('.form-submit');
			const formUserName = document.querySelector('#user-name');
			const formUserProfession = document.querySelector('#user-profession');
			const formUserPosition = document.querySelector('#user-position');
			const formUserMail = document.querySelector('#user-mail');
			const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

			document.querySelector('#letterFormSubmitted .layer__button.close').addEventListener('click' , () => {
				layerClose('newsLetter');
			});

			formOpener.addEventListener('click' , (event) => {
				event.preventDefault();
				layerOpen('newsLetter');

			});

			formSubmitButton.addEventListener('click' , (event) => {
				event.preventDefault();
				console.log('b');

				document.querySelectorAll('.form-field').forEach((item) => {
					item.classList.remove('warning');
				})
	
				if(!needCheck.checked) {
					needCheck.focus();
					return false;
				}
	
				if(!formUserName.value) {
					formUserName.focus();
					formUserName.closest('.form-field').classList.add('warning')
					return false;
				}
	
				if(!formUserProfession.value) {
					formUserProfession.focus();
					formUserProfession.closest('.form-field').classList.add('warning')
					return false;
				}	

				if(!formUserPosition.value) {
					formUserPosition.focus();
					formUserPosition.closest('.form-field').classList.add('warning')
					return false;
				}	
	
				if(!formUserMail.value) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					return false;
				}
	
				if(!regEmail.test(formUserMail.value)) {
					formUserMail.focus();
					formUserMail.closest('.form-field').classList.add('warning')
					formUserMail.nextElementSibling.innerHTML = '질못된 입력값입니다';
					return false;
				}

				layerOpen('letterFormSubmitted');
			})
		}
		break;

		case 'welfare':{
			(function () {
				let options = {};
				let slides = document.querySelectorAll("#swiper .swiper-slide");
        if ( slides.length == 1 ) {
					swiperOptions = {
						loop: false,
						spaceBetween: 0,
						slidesPerView: '1',
						speed: 0,
						grabCursor: false,
						mousewheelControl: false,
						keyboardControl: false,
					}
        } else {
					swiperOptions = {
						loop: true,
						spaceBetween: 0,
						slidesPerView: '1',
						speed: 400,
						grabCursor: true,
						mousewheelControl: true,
						keyboardControl: true,
						observer: true,
						observeParents: true,
						autoplay: true,
						pagination: {
							el: '.swiper-pagination',
							type: 'bullets',
							clickable: true
						},
					}
        }
				const swiper = new Swiper("#swiper", swiperOptions);
			}) ()
		}
		break;

		default: 
			// alert('c');
	}
}

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