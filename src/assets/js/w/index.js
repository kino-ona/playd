const swiperOptions = {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  speed: 24000,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,
};

const swip2 = new Swiper("#swip2", swiperOptions);

// const container = document.querySelector('#container');
// const abTcontainer =  container.getBoundingClientRect().top;

anime1 = () => {
  const main = document.querySelector('body.main');
  const area = main.querySelector('[data-section="service"]');
  const areaInner = area.querySelector('.section__inner');
  const areaHead = area.querySelector('.section__head');
  const areaCont = area.querySelector('.section__content');
  const areaContImgs = area.querySelectorAll('.section__content .image-block');
  let wdH = window.innerHeight;
  let wdW = parseInt(document.body.clientWidth);
  let scT;
  let elemT = 150;
  let innerW = 1200;
  let ch = 1620;
  let wdm = ((wdW - innerW)*0.5);

  area.style.height = ch + 'px';
  areaInner.style.left = wdm + 'px';

  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    
    for (i = 0; i < areaContImgs.length; i++) { 
      if (areaContImgs[i].getBoundingClientRect().top <= wdH + elemT) {
        areaContImgs[i].classList.add('slidein');
      }
    }

    setTimeout((delay) => {
      let areaReach = area.getBoundingClientRect(true).top;
      let areaEndReach = area.getBoundingClientRect(true).bottom;
      let headReach = areaHead.getBoundingClientRect().top;
      let headEndReach = areaHead.getBoundingClientRect().bottom;
    
      console.log(areaReach, areaEndReach, headReach, headEndReach);
  
      if (areaReach <= elemT) {
        area.classList.add('approached');
        areaHead.style.left = wdm + 'px';
      } else {
        area.classList.remove('approached');
        areaHead.style.left = 0;
      }
      if (areaEndReach <= 580) { 
        area.classList.remove('approached');
        areaHead.style.top = 'auto';
        areaHead.style.left = 0;
        areaHead.style.bottom = 0;
      }

      clearTimeout(delay);
    }, 50);
  })
}
anime1();

anime2 = () => {
  const main = document.querySelector('body.main');
  const graph = main.querySelector('[data-section="partners"]');  
  let wdH = window.innerHeight;
  let scT;
  let abTgraph;
  window.addEventListener('resize', () => {
    wdH = window.innerHeight;
  })
  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    abTgraph = scT + graph.getBoundingClientRect().top;
    setTimeout((delay) => {
      scT > (abTgraph - wdH) ? graph.classList.add('approached') : graph.classList.remove('approached') ;
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

      if(item.classList.contains('accordian__item--active')) {
        item.classList.remove('accordian__item--active')
      }else {
        item.classList.add('accordian__item--active');
      }
    });
  });
 

  

};

dataAnalysis();