window.addEventListener('load', () => {
  const visualSrc = document.querySelector('.visual__image img');
  let getVisualSrc = visualSrc.getAttribute('src');
  let visualSrcName = getVisualSrc.split('.')[0];
  let i = 0;

  const setVisual = () => {
    i++;
    visualSrcName = '@main_' + i  + '.jpg'
    visualSrc.setAttribute('src', '../assets/images/w/visual/' + visualSrcName);
  }
  const stopVisual = () => {
    clearInterval(timer);
  }
  const timer = setInterval(setVisual, 300);
  setTimeout(stopVisual, 1600);
})

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
};
const swiper = new Swiper("#swiper", swiperOptions);


minHeight1 = () => {
  let wdH = window.innerHeight;
  const main = document.querySelector('body.main');
  const area = main.querySelector('[data-section="performance"]');
  const areaInner = area.querySelectorAll('.box .box__title');

  setTimeout((delay) => {
    for (i = 0; i < areaInner.length; i++) { 
      areaInner[i].style.minHeight = wdH + 'px';
    }
    window.addEventListener('resize', () => {
      let wdH = window.innerHeight;
      for (i = 0; i < areaInner.length; i++) { 
        areaInner[i].style.minHeight = wdH + 'px';
      }
    })
    clearTimeout(delay);
  }, 50);
}
minHeight1();

anime1 = () => {
  let scT;
  let wdH = window.innerHeight;
  let wdW = document.body.clientWidth;
  const main = document.querySelector('body.main');
  const area = main.querySelector('[data-section="service"]');
  const areaInner = area.querySelector('.section__inner');
  const areaHead = area.querySelector('.section__head');
  const areaCont = area.querySelector('.section__content')
  const areaContImgs = area.querySelectorAll('.section__content .image-block');
  let innerW = parseFloat(window.getComputedStyle(areaInner).width);
  let innerH = parseFloat(window.getComputedStyle(areaCont).height);
  let elemT = 150;
  let wdP = ((wdW - innerW)*0.5);

  area.style.height = innerH*0.5 + 'px';
  areaInner.style.left = wdP + 'px';

  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    
    for (i = 0; i < areaContImgs.length; i++) { 
      if (areaContImgs[i].getBoundingClientRect().top <= wdH + elemT) {
        areaContImgs[i].classList.add('slidein');
      }
    }

    setTimeout((delay) => {
      window.addEventListener('resize', () => {
        wdW = document.body.clientWidth;
        innerW = parseFloat(window.getComputedStyle(areaInner).width);
        innerH = parseFloat(window.getComputedStyle(areaInner).height);
        wdP = ((wdW - innerW)*0.5);
        area.style.height = innerH*0.5 + 'px';
        areaInner.style.left = wdP + 'px';
      })

      let areaReach = area.getBoundingClientRect(true).top;
      let areaEndReach = area.getBoundingClientRect(true).bottom;

      if (areaReach <= elemT) {
        area.classList.add('approached');
        areaHead.style.cssText = `top: 150px; left: ${wdP}px; bottom: auto;`
      } else {
        area.classList.remove('approached');
        areaHead.style.cssText = `top: 0; left: 0; bottom: auto;`
      }
      if (areaEndReach <= 580) { 
        area.classList.remove('approached');
        areaHead.style.cssText = `top: auto; left: 0; bottom: 0;`
      }
      clearTimeout(delay);
    }, 50);
  })
}
anime1();

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

const dataAnalysis = () => {
  const accordianItem = document.querySelectorAll('.accordian__item');
  accordianItem.forEach(targets => {
    targets.classList.remove('accordian__item--active')
  })
  accordianItem.forEach(item => {
    item.addEventListener('click', () => {      
      accordianItem.forEach(targets => {
        targets.classList.remove('accordian__item--active')
      })
      if (item.classList.contains('accordian__item--active')) {
        item.classList.remove('accordian__item--active')
      } else {
        item.classList.add('accordian__item--active');
      }
    });
  });
}
dataAnalysis();