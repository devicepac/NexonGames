window.addEventListener("load", function () {

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
  // 헤더 메뉴
  let header = document.querySelector(".header");
  let nav = document.querySelector(".header-nav");
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  header.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });
});
