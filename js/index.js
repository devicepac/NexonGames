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
    autoplay: {
      delay: 16000,
      disableOnInteraction: false,
    },
  });
  let mySwiper2 = new Swiper(".sw-introduce", {
    spaceBetween: 0,
  });
};
