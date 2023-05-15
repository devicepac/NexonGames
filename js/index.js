window.onload = function () {
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
      nextEl: ".game-slide .sw-next",
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
