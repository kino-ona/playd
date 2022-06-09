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
    setTimeout((delay) => {
      headerLoaded();
      if (scT === 0) {
        headerTransparentize();
      } else if (scT > abTcontainer*0.9) {
        headerUntransparentize();
        header.addEventListener('mouseleave', () => {headerUntransparentize();})
      } else if (scT === abTcontainer*0.9) {
        headerTransparentize();
      } else {
        headerTransparentize();
      }
      clearTimeout(delay);
	  }, 50);
  })
}
indexHeader();
 
//index kv
window.addEventListener('load', () => {
  const visual = document.querySelectorAll('.visual__image .image');
  let i = 0;

  const setKv = () => {
    i++;
    visual.forEach(() => {
      visual[i].classList.add('active');
      if ((visual.length) > i > 2) {visual[i-2].style.display = `none`;}
    });
  };
  
  const stopKv = () => {
    clearInterval(timer);
  }
  const timer = setInterval(setKv, 900);
  setTimeout(stopKv, 10000);
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
const serviceArea = document.querySelector('section[data-section="performance"]');
const listItems = serviceArea.querySelectorAll('.accordian__item');
const boxItems = serviceArea.querySelectorAll('.box-item--left, .box-item--right');

listItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    listItems.forEach(targets => { targets.classList.remove('accordian__item--active');})
    let result = item.classList.contains('accordian__item--active');
    !result ? item.classList.add('accordian__item--active') : item.classList.remove('accordian__item--active');
  });
  item.addEventListener('mouseleave', () => {
    listItems.forEach(targets => { targets.classList.remove('accordian__item--active');})
  });
})

const targetArrowBtn = serviceArea.querySelector('.main .box-item--left ');

boxItems.forEach(item => {
  item.addEventListener('mouseover', () => {item.classList.add('item--is-visible');})
  item.addEventListener('mouseleave', () => {item.classList.remove('item--is-visible');})
  item.querySelector('.box__title').addEventListener('focus', () => {item.classList.add('item--is-visible');})
  item.querySelector('.box__title').addEventListener('!focus', () => {item.classList.remove('item--is-visible');})
})