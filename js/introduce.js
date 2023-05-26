window.addEventListener("load", function () {
  //설명문 슬라이드
  let mySwiper2 = new Swiper(".sw-introduce", {
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".introduce .sw-next",
      prevEl: ".introduce .sw-prev",
    },
  });
});
