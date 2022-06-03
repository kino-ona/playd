//index header
const indexHeader = () => {
  const header = document.querySelector('header#header');
  const logo = header.querySelector('.logo');

  const headerTransparentize = () => {
    header.classList.replace('header__sticked', 'header__transparent');
    logo.classList.replace('logo__filled', 'logo__default');
  }
  const headerUntransparentize = () => {
    header.classList.replace('header__transparent', 'header__sticked');
    logo.classList.replace('logo__default', 'logo__filled');
  }

  const headerLoaded = () => {
    header.addEventListener('mouseenter', () => {headerUntransparentize();})
    header.addEventListener('mouseleave', () => {headerTransparentize();})
  }

  window.addEventListener('load', () => {headerLoaded();})

  window.addEventListener('scroll', () => {
    let scT = window.pageYOffset;
    const container = document.querySelector('#container');
    const abTcontainer =  container.getBoundingClientRect().top;
    const navLinks = document.querySelectorAll('#header nav.nav .nav__link');
    const navmenu = document.querySelector('header#header .navmenu');
    const navmenuList = document.querySelectorAll('header#header .navmenu .navmenu__list');
    setTimeout((delay) => {
      if (scT > abTcontainer*0.9) {
        headerUntransparentize();
        header.addEventListener('mouseenter', () => {header.classList.remove('header--scrolled');})
        header.addEventListener('mouseleave', () => {header.classList.add('header--scrolled');headerUntransparentize();})
      } else if (scT === abTcontainer*0.9) {
        header.classList.remove('header--scrolled');
        headerTransparentize();
      } else {
        header.addEventListener('mouseenter', () => {headerUntransparentize();})
        header.addEventListener('mouseleave', () => {header.classList.remove('header--scrolled');headerTransparentize();})
      }
      clearTimeout(delay);
	  }, 50);
  })
}
indexHeader();
 
//index kv
window.addEventListener('load', () => {

  const visualSrc = document.querySelector('section.visual .visual__image img');
  let getVisualSrc = visualSrc.getAttribute('src');
  let visualSrcName = getVisualSrc.split('.')[0];
  let i = 0;

  const setKv = () => {
    i++;
    visualSrcName = '@main_' + i  + '.jpg'
    visualSrc.setAttribute('src', '../assets/images/w/visual/' + visualSrcName);
  }
  const stopKv = () => {
    clearInterval(timer);
  }
  const timer = setInterval(setKv, 300);
  setTimeout(stopKv, 1600);
})

//setting min-height to each section needed
minHeights = () => {
  let wdH = window.innerHeight;
  const main = document.querySelector('body.main');
  const kv = main.querySelector('.visual');
  const area1 = main.querySelector('[data-section="service"]');
  const area1Cont = area1.querySelector('.section__content')
  let innerH = parseFloat(window.getComputedStyle(area1Cont).height);
  const area2 = main.querySelector('[data-section="performance"]');
  const area2Inner = area2.querySelectorAll('.box-item .box__title');

  setTimeout((delay) => {
    kv.style.minHeight = wdH + 'px';
    area1.style.height = innerH*0.5 + 'px';

    for (i = 0; i < area2Inner.length; i++) { 
      area2Inner[i].style.minHeight = wdH + 'px';
    }

    window.addEventListener('resize', () => {
      wdH = window.innerHeight;

      kv.style.minHeight = wdH + 'px';
      area1.style.height = innerH*0.5 + 'px';

      for (i = 0; i < area2Inner.length; i++) { 
        area2Inner[i].style.minHeight = wdH + 'px';
      }
    })

    clearTimeout(delay);
  }, 50);
}
minHeights();

//`service` section
anime1 = () => {
  let scT;
  let wdH = window.innerHeight;
  let wdW = document.body.clientWidth;
  const main = document.querySelector('body.main');
  const area = main.querySelector('[data-section="service"]');
  const areaInner = area.querySelector('.section__inner');
  const areaHead = area.querySelector('.section__head');
  const areaContImgs = area.querySelectorAll('.section__content .image-block');
  let innerW = parseFloat(window.getComputedStyle(areaInner).width);
  let HeadH = parseFloat(window.getComputedStyle(areaHead).height);
  let elemT = 150;
  let wdP = ((wdW - innerW)*0.5);

  let areaReach = area.getBoundingClientRect(true).top;
  let areaEndReach = area.getBoundingClientRect(true).bottom;

  areaInner.style.left = wdP + 'px';

  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    areaReach = area.getBoundingClientRect(true).top;
    areaEndReach = area.getBoundingClientRect(true).bottom;
    
    for (i = 0; i < areaContImgs.length; i++) { 
      if (areaContImgs[i].getBoundingClientRect().top <= wdH + elemT) {
        areaContImgs[i].classList.add('slidein');
      }
    }

    setTimeout((delay) => {
      window.addEventListener('resize', () => {
        wdW = document.body.clientWidth;
        innerW = parseFloat(window.getComputedStyle(areaInner).width);
        wdP = ((wdW - innerW)*0.5);
        areaInner.style.left = wdP + 'px';
        areaReach = area.getBoundingClientRect(true).top;
        areaEndReach = area.getBoundingClientRect(true).bottom;
      })

      if (areaReach <= elemT) {
        area.classList.add('approached');
        areaHead.style.cssText = `top: ${elemT}px; left: ${wdP}px; bottom: auto;`
      } else {
        area.classList.remove('approached');
        areaHead.style.cssText = `top: 0; left: 0; bottom: auto;`
      }
      if (areaEndReach <= (elemT*2 + HeadH + 50)) { 
        area.classList.remove('approached');
        areaHead.style.cssText = `top: auto; left: 0; bottom: ${elemT + 50}px;`
      }
      clearTimeout(delay);
    }, 50);
  })
}
anime1();

//`partners` section
anime2 = () => {
  let scT;
  let wdH = window.innerHeight;
  const main = document.querySelector('body.main');
  const graph = main.querySelector('[data-section="partners"]');
  let graphAbT;

  window.addEventListener('resize', () => {
    wdH = window.innerHeight;
  })

  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    graphAbT = scT + graph.getBoundingClientRect().top;

    setTimeout((delay) => {
      scT > (graphAbT - wdH) ? graph.classList.add('approached') : graph.classList.remove('approached') ;
      clearTimeout(delay);
    }, 50);
  })
}
anime2();

//accordion UI in `performance` section
const listItems = document.querySelectorAll('section[data-section="performance"] .accordian__item');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(targets => { targets.classList.remove('accordian__item--active');})
    let result = item.classList.contains('accordian__item--active');
    result ? item.classList.add('accordian__item--active') : item.classList.remove('accordian__item--active');
  });
})

//belt-type banner
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