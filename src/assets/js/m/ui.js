(function () {
	//stickyHeader		
	const header = document.querySelector('#header');
	const bodyClass = document.querySelector('body').classList[0];
	const headerTitle = document.querySelector('.header__title');
	const footerBanner = document.querySelector('.footer__banner')

	const subCommonFunction = () => {
		header.classList.add('scrolled');
		headerTitle.classList.add('sub-page--active');
		headerTitle.classList.add('font--md');
		header.classList.add('scrolled');
		footerBanner.classList.add('sub-page--active');
	}
	

	if(bodyClass) {
		switch(bodyClass) {
			case 'main':
				window.addEventListener('scroll', () => {
					let sct = window.pageYOffset;
					let threshold = 10;
					sct > threshold ? header.classList.add('scrolled') : header.classList.remove('scrolled') ;
				})
				break;

			case 'contact':
				headerTitle.innerHTML = bodyClass.toUpperCase();
				subCommonFunction();
				break;

			case 'recruit':
				headerTitle.innerHTML = '채용';
				subCommonFunction();
				break;

			case 'welfare':
				headerTitle.innerHTML = '복리후생';
				subCommonFunction();
			break;

			case 'ethical':
				headerTitle.innerHTML = '윤리경영';
				subCommonFunction();
			break;

			default: 
				alert('c');
		}
	}

	//gnb
	const headerGnbItem = document.querySelectorAll('.gnb__item');
	const headerGnbItemA = document.querySelectorAll('.gnb__item > a');
	headerGnbItemA.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			if(item.closest('div').classList.contains('gnb__item--active')){ 
				item.closest('div').classList.remove('gnb__item--active')
				return false;
			};

			headerGnbItem.forEach((targets) => {
				targets.classList.remove('gnb__item--active');
			})
			item.closest('div').classList.add('gnb__item--active');
		});
	})


	const gnbButton = document.querySelector('.header__button');
	const gnb = document.querySelector('.gnb');
	const body = document.querySelector('body');
	
	gnbButton.addEventListener('click', () => {
		if (body.classList.contains('open-gnb')) {
			body.classList.remove('open-gnb');
		} else {
			gnb.classList.add('open-gnb');
			body.classList.add('open-gnb');
		}
	})

	//input
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
	
	//tab
	const subTabs = document.querySelector('.sub-tabs__wrap');
	const subTabsA = document.querySelectorAll('.sub-tabs a');
	const subContainer = document.querySelectorAll('.sub-container');
	
	subTabsA.forEach((item) => {
		item.addEventListener('click', (event,target) => { 
			event.preventDefault();
		
			if(item.dataset.content) {
				document.querySelectorAll('.sub-container').forEach((thisTarget) => {
					thisTarget.classList.remove('content--active')
				})

				document.querySelector('.sub-container--' + item.dataset.content).classList.add('content--active');

				subTabsA.forEach(element => {
					element.classList.contains('sub-tabs__item--active') ? 
					element.classList.remove('sub-tabs__item--active') : null;
				});
					
				item.classList.add('sub-tabs__item--active');
			}
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


	//form check layerpopup
	if (bodyClass === 'contact') {
		const formSubmit = document.querySelector('.contact .form-submit');
		const formSubmitClose = document.querySelector('.contact .close_btn');
		const formUserCompany  = document.querySelector('.contact #user-company');
		const formUserName = document.querySelector('.contact #user-name');
		const formUserNumber = document.querySelector('.contact #user-number');
		const formUserMail = document.querySelector('.contact #user-mail');
		const formUserUrl = document.querySelector('.contact #user-url');
		const formUserFile = document.querySelector('.contact #form-file-text');
		const formFileIput = document.querySelector('.contact #form-file-text');
		const formFileButton = document.querySelector('.contact #form-file-button');
		const needCheck = document.querySelector('.contact #sub-checkbox--personal');
		const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

		formFileButton.addEventListener('change', () => {
			if(!formFileIput.value) {
				formFileIput.closest('.input-box--file').classList.remove('warning')
			}
			formFileIput.value = formFileButton.files[0].name
		});
		
		needCheck.addEventListener('change', () => {
			if(needCheck.checked) {
				formSubmit.classList.add('submit--active');
			}else {
				formSubmit.classList.remove('submit--active');
			}
		})
		
		
		formSubmit.addEventListener('click' , (event) => {
			event.preventDefault();
			document.querySelectorAll('.form-field').forEach((item) => {
				item.classList.remove('warning');
			})

			if(!needCheck.checked) {
				needCheck.focus();
				return false;
			}

			if(!formFileIput.value) {
				formFileIput.focus();
				formFileIput.closest('.input-box--file').classList.add('warning')
				return false;
			}

			if(!formUserFile.value) {
				formUserFile.focus();
				formUserFile.closest('.input-box--file').classList.add('warning')
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


			layerOpen('form-popup');
		})

		formSubmitClose.addEventListener('click' , (event) => {
			layerClose('form-popup');
		})
	}

	if(bodyClass === 'recruit') {
		const recruitItem = document.querySelectorAll('.recruit-ordinary__item');
		const recruitCloseButton = document.querySelectorAll('.close_btn ');

		recruitItem.forEach((item, index) => {
			item.addEventListener('click', () => {
				layerOpen('recruit-popup--' +[index + 1])
			});		
		});

		recruitCloseButton.forEach((item, index) => {
			item.addEventListener('click', () => {
				layerClose('recruit-popup--' +[index + 1])
			});		
		});

	}

	if(bodyClass === 'welfare') {
		const swiper = new Swiper('.swiper', {
			pagination: {
				el: '.swiper-pagination',
			}
		});
	}

	if(bodyClass === 'ethical') {
		const sublist =  document.querySelectorAll('.sub-list__item');
		const categoryItem = document.querySelectorAll('.sub-list-category__item');
		const declarationList = document.querySelectorAll('.sub-content');
		const formSubmitOpen = document.querySelector('.ethical .sub-content__title--link')
		const formSubmitClose = document.querySelector('.ethical .close');
		const formSubmitClose2 = document.querySelector('.ethical .layer__button');
		

		sublist.forEach(item => {
			item.addEventListener('click' , () => {
				let chapter = item.classList[1].split('--')[1];
				sublist.forEach(targets => {
					if(targets.classList.contains('sub-list__item--active'))targets.classList.remove('sub-list__item--active')
				})

				categoryItem.forEach( targets => {
					targets.classList.remove('sub-list-category__item--active');
				})
				
				item.classList.add('sub-list__item--active');
				document.querySelector('.sub-list-category__item--' + chapter).classList.add('sub-list-category__item--active');
				
			})
		})

		categoryItem.forEach(item => {
			item.addEventListener('click', (event) => {
				event.preventDefault();
				sublist.forEach((targets) => {
					targets.classList.remove('sub-list__item--active');
				})

				categoryItem.forEach( targets => {
					targets.classList.remove('sub-list-category__item--active');
				})

				document.querySelector('.sub-list__item--' + item.dataset.content).classList.add('sub-list__item--active');
			
				if(document.querySelector('.sub-container--guideline').classList.contains('content--active')) {
					document.querySelector('.sub-container--guideline .sub-list-category__item--' + item.dataset.content).classList.add('sub-list-category__item--active');
				}
				if(document.querySelector('.sub-container--declaration').classList.contains('content--active')) {
					document.querySelector('.sub-container--declaration .sub-list-category__item--' + item.dataset.content).classList.add('sub-list-category__item--active');

					declarationList.forEach( targets => {
						targets.classList.remove('sub-content--active');
					})

					document.querySelector('.sub-container--declaration .sub-content--' + item.dataset.content).classList.add('sub-content--active');		
				}
			})
		})

		formSubmitOpen.addEventListener('click' , () => {
			layerOpen('termAgreePrivacy');
		})

		formSubmitClose.addEventListener('click' , () => {
			layerClose('termAgreePrivacy');
		})

		formSubmitClose2.addEventListener('click' , () => {
			layerClose('termAgreePrivacy');
		})
	}

}) ()
