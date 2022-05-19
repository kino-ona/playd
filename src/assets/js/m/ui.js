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
	
	if(bodyClass === 'main') {
		window.addEventListener('scroll', () => {
			let sct = window.pageYOffset;
			let threshold = 10;
			sct > threshold ? header.classList.add('scrolled') : header.classList.remove('scrolled') ;
		})
	}else if(bodyClass === 'contact') {
		headerTitle.innerHTML = bodyClass.toUpperCase();
		subCommonFunction();
	
	} else if(bodyClass === 'recruit') {
		headerTitle.innerHTML = '인재채용';
		subCommonFunction();
	} else {

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


	//form check layerpopup
	const formSubmit = document.querySelector('.contact .form-submit');
	const formSubmitClose = document.querySelector('.contact .close_btn');
	const formUserCompany  = document.querySelector('#user-company');
	const formUserName = document.querySelector('#user-name');
	const formUserNumber = document.querySelector('#user-number');
	const formUserMail = document.querySelector('#user-mail');
	const formUserUrl = document.querySelector('#user-url');
	const formUserFile = document.querySelector('#form-file-text');
  const formFileIput = document.querySelector('#form-file-text');
  const formFileButton = document.querySelector('#form-file-button');
	const needCheck = document.querySelector('#sub-checkbox--personal');

	formFileButton.addEventListener('change', () => {
		if(!formFileIput.value) {
			formFileIput.closest('.input-box--file').classList.remove('warning')
		}
		formFileIput.value = formFileButton.files[0].name
	});
	
	formSubmit.addEventListener('click' , (event) => {
		event.preventDefault();
		document.querySelectorAll('.form-field').forEach((item) => {
			item.classList.remove('warning');
		})

		console.log(needCheck)

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

		if(!formUserUrl.value) {
			formUserUrl.focus();
			formUserUrl.closest('.form-field').classList.add('warning')
			return false;
		}

		layerOpen('form_popup');
	})

	formSubmitClose.addEventListener('click' , (event) => {
		layerClose('form_popup');
	})
}) ()
