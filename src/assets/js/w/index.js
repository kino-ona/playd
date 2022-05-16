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
  const mainFullpage = main.querySelector('[data-section="service"]');
  const mainFullpageInner = mainFullpage.querySelector('.section__inner');
  const mainFullpageInnerHead = mainFullpageInner.querySelector('.section__head');
  let wdH = window.innerHeight;
  let wdW = window.innerWidth;
  let scT;
  let elemT = 150;
  let innerW = 1200;
  let abTmainFullpage;

  // mainFullpage.style.height = wdH + 'px';

  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    let reached = mainFullpage.getBoundingClientRect().top;
    abTmainFullpage = scT + mainFullpage.getBoundingClientRect().top;

    setTimeout((delay) => {
      if (reached <= elemT) {
        mainFullpage.classList.add('approached');
        window.addEventListener('resize', () => {
          wdH = window.innerHeight;
          wdW = window.innerWidth;
          mainFullpage.style.height = wdH + 'px';

          mainFullpageInner.style.left = ((wdW - innerW)/2) + 'px';
        })
  
        mainFullpageInner.style.left = ((wdW - innerW)/2) + 'px';
        console.log(wdW, innerW, elemT);
      } else {
        mainFullpage.classList.remove('approached');
      }

      if (scT > (abTmainFullpage + wdH - elemT)) { 
        mainFullpage.classList.remove('approached') 
      }
      clearTimeout(delay);
    }, 50);
  })
}
anime1();

anime2 = () => {
  const main = document.querySelector('body.main');
  const mainGraph = main.querySelector('[data-section="partners"]');  
  let wdH = window.innerHeight;
  let scT;
  let abTmainGraph;
  window.addEventListener('resize', () => {
    wdH = window.innerHeight;
  })
  window.addEventListener('scroll', () => {
    scT = window.pageYOffset;
    abTmainGraph = scT + mainGraph.getBoundingClientRect().top;
    setTimeout((delay) => {
      scT > (abTmainGraph - wdH) ? mainGraph.classList.add('approached') : mainGraph.classList.remove('approached') ;
      clearTimeout(delay);
    }, 50);
  })
}
anime2();