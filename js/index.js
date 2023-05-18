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
  const menuToggle = document.querySelector(".header-hidden-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenuButton = document.querySelector(".mobile-close-bt");

  menuToggle.addEventListener("click", function () {
    mobileMenu.style.right = "0"; /* 메뉴가 오른쪽에서 나오도록 위치 조정 */
  });

  closeMenuButton.addEventListener("click", function () {
    mobileMenu.style.right = "-100%"; /* 메뉴를 오른쪽으로 숨김 */
  });

  // 모바일 메뉴
  const menuItems = document.querySelectorAll(".mobile-gnb > li");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("open"); /* 모바일 메뉴를 열거나 닫음 */
  });

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      const subMenu = item.querySelector(".mobile-submenu");
      if (subMenu) {
        event.preventDefault(); /* 기본 클릭 동작을 막음 */
        const isOpen = subMenu.style.display === "block";
        closeAllSubMenus(); /* 다른 모든 서브메뉴를 닫음 */

        if (!isOpen) {
          subMenu.style.display = "block"; /* 클릭한 항목의 서브메뉴를 나타냄 */
        } else {
          subMenu.style.display = "none"; /* 클릭한 항목의 서브메뉴를 숨김 */
        }
      }
    });
  });

  function closeAllSubMenus() {
    const subMenus = document.querySelectorAll(".mobile-submenu");
    subMenus.forEach(function (subMenu) {
      subMenu.style.display = "none"; /* 모든 서브메뉴를 숨김 */
    });
  }
  // 헤더 메뉴
  let header = document.querySelector(".header");
  let nav = document.querySelector(".header-nav");
  nav.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  header.addEventListener("mouseleave", function () {
    header.classList.remove("header-active");
  });

  //게임 슬라이드
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
      el: ".sw-number",
      type: "custom",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        let currentIndex = ("0" + current).slice(-2);
        let totalSlides = ("0" + total).slice(-2);
        return (
          '<div class="swiper-o-number">' +
          currentIndex +
          "</div><span>&nbsp;/&nbsp;</span><span>" +
          totalSlides +
          "</span>"
        );
      },
    },
  });
  //설명문 슬라이드
  let mySwiper2 = new Swiper(".sw-introduce", {
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".introduce .sw-next",
      prevEl: ".introduce .sw-prev",
    },
  });
};
