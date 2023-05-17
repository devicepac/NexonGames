window.onload = function () {
  // 위로 이동하기
  // .gotop 을 js에 저장하자.
  const goTop = document.querySelector(".fix-banner");
  goTop.addEventListener("click", function () {
    // 위로 슬라이등 코드
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 모바일 버튼 기능

  // 헤더 메뉴
  let header = document.querySelector(".header");
  let nav = document.querySelector(".header-nav");
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  header.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });

  let mySwiper = new Swiper(".sw-game", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 16000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".game-slide .bt-next",
    },
    pagination: {
      el: '.sw-number',
      type: 'custom',
      clickable: true,
      renderCustom: function (swiper, current, total) {
        let currentIndex = ('0' + current).slice(-2);
        let totalSlides = ('0' + total).slice(-2);
        return '<div class="swiper-o-number">' + currentIndex + '</div><span>&nbsp;/&nbsp;</span><span>' + totalSlides + '</span>';
      },
    },
  });
  let mySwiper2 = new Swiper(".sw-introduce", {
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".introduce .sw-next",
      prevEl: ".introduce .sw-prev",
    },
  });
};
