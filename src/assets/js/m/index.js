(function () {
  //visual
  const visualSrc = document.querySelector(".visual__image .image");

  if (visualSrc) {
    const visual = document.querySelector(".visual");
    const visualImages = document.querySelectorAll(".visual__image .image");
    let i = 0;

    visualImages[0].style.opacity = 1;

    const setKv = () => {
      i++;
      visualImages.forEach(() => {
        if (i === visualImages.length) {
          visualImages.forEach((item) => {
            item.style.opacity = 0;
          });

          visualImages[0].style.opacity = 1;
          i = 0;
        } else {
          if (i === 0) {
          } else {
            visualImages[i - 1].style.opacity = 0;
          }
          visualImages[i].style.opacity = 1;
        }
      });
    };

    const stopKv = () => {
      clearInterval(timer);
    };
    const timer = setInterval(setKv, 1750);
    // setTimeout(stopKv, 9800);

    //aos
    AOS.init();

    //count
    const boxoffsetTop =
      document.querySelector(".box-item--right").offsetTop -
      document.querySelector(".box-item--right").clientHeight;
    const countUp1 = document.querySelectorAll(
      ".card-box__content p > span"
    )[0];
    const countUp2 = document.querySelectorAll(
      ".card-box__content p > span"
    )[1];
    const countUp3 = document.querySelectorAll(
      ".card-box__content p > span"
    )[2];
    const options = {
      duration: 10,
    };
    const count1 = new countUp.CountUp(countUp1, 5675, options); //20230424
    const count2 = new countUp.CountUp(countUp2, 2657, options); //20230424
    const count3 = new countUp.CountUp(countUp3, 76305, options); //20230424

    window.addEventListener("scroll", () => {
      if (window.scrollY > boxoffsetTop) {
        setTimeout(() => {
          count1.start();
          count2.start();
          count3.start();
        }, 1000);
      }
    });

    //swiper
    let swiper = new Swiper(".sectionSwiper", {
      slidesPerView: "auto",
    });
  }

  const startDate = new Date("2022/08/01 23:59:59");

  const endDate = new Date("2022/08/08 23:59:59");

  const today = Date.now();

  if (today >= startDate && today <= endDate) {
    const setCookie = function (name, value, exp) {
      var date = new Date();
      date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
      document.cookie =
        name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    };

    const getCookie = function (name) {
      var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");

      return value ? value[2] : null;
    };

    if (!getCookie("main-popup--checked")) {
      layerOpen("main-popup");
    }

    document
      .querySelector(".main-popup .close")
      .addEventListener("click", () => {
        if (
          document.querySelector(".main-popup .sub-checkbox__input:checked")
        ) {
          setCookie("main-popup--checked", "true", 1);
          layerClose("main-popup");
        } else {
          layerClose("main-popup");
        }
      });

    document
      .querySelector(".main-popup .layer__footer button")
      .addEventListener("click", () => {
        if (
          document.querySelector(".main-popup .sub-checkbox__input:checked")
        ) {
          setCookie("main-popup--checked", "true", 1);
          layerClose("main-popup");
        } else {
          layerClose("main-popup");
        }
      });
  }
})();
