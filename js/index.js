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
  // 비디오 관련된 정보를 파악한다.
  // 1. 각 비디오의 재생시간 파악을 한다.
  // 2. 각 비디오가 재생이 완료되면 다음 슬라이드로 이동
  // html 태그 를 통해서 video 가 몇개가 있는지 파악한다.
  const videos = document.querySelectorAll("video");
  let timeArr = [];

  let gameSwiper = new Swiper(".sw-gameslide", {
    spaceBetween: 0,
    loop: true,
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

  gameSwiper.on("slideChange", function () {
    // 성능 최적화
    videos[playIndex].pause();
    // console.log("slide changed : " + this.realIndex);
    playIndex = this.realIndex;
    playVideo();
  });
  // 각 비디오 파일의 재생 시간을 알아낸다.
  for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("loadedmetadata", function () {
      //   console.log(videos[i].duration);
      // 실행시간 (숫자 올림!! 처리)
      let time = Math.ceil(this.duration);
      timeArr[i] = time;
    });
    // 모든 비디오를 먼저 멈춘다. (자동재생 금지);
    // 원하는 경우 재생한다.
    videos[i].currentTime = 0;
    videos[i].pause();
  }

  // 재생할 비디오 인덱스 번호
  let playIndex = 0;
  let playTimer;

  function playVideo() {
    resetBar();

    // 다음 비디오 재생
    videos[playIndex].currentTime = 0;
    videos[playIndex].play();

    clearTimeout(playTimer);
    playTimer = setTimeout(function () {
      // 다음 슬라이드로 이동
      gameSwiper.slideNext();
    }, timeArr[playIndex] * 1000);
  }
  // 프로그스바 만들기
  let bar = document.querySelector(".sw-bar-b");
  let barXscale = 0;
  bar.style.width = `${barXscale}%`;
  // 비디오 재생 시간 1초마다 barXscale 을 변화시킨다.
  // 1번만 실행하고 종료하는 setTimeout 이 아니고.!!!
  // 비디오 재생 시간 내내 1초마다 반복해서 함수를 실행한다.
  let barTimer;

  function resetBar() {
    barXscale = 0;
    // 항상 타이머는 지우고 만들어야 합니다.!!!
    clearInterval(barTimer);
    barTimer = setInterval(function () {
      barXscale += 0.1;
      bar.style.width = `${barXscale}%`;
      if (barXscale >= 100) {
        barXscale = 100;
      }
    }, timeArr[playIndex]);
  }

  playVideo();
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
