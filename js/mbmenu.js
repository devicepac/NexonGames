window.addEventListener("load", function () {
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
  
  window.addEventListener("resize", function () {
    const mobileMenu = document.querySelector(".mobile-menu");

    if (mobileMenu.style.right === "0px") {
      mobileMenu.style.right = "-100%"; 
    }
  });
  // 모바일 아코디언 메뉴
  const sideLis = document.querySelectorAll(".mobile-gnb > li");
  const sideMenuA = document.querySelectorAll(".mobile-gnb > li > a");
  const sideSubMenu = document.querySelectorAll(".mobile-gnb > li > .mobile-submenu");
  const sideMenuOffset = 51;
  let sideOpenNumber; //undifind나옴

  // 펼쳐질 높이값을 담아둔다.
  const sideOpenHeightArray = [];
  // 각 서브 메뉴의 높이를 알아보자.
  sideSubMenu.forEach((item, index) => {
    sideOpenHeightArray[index] = item.scrollHeight + sideMenuOffset;
  });
  // 클릭 처리시작.
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      // 기본동작 href 막아주기
      event.preventDefault();
      showSubMenu(index);
    });
  });

  function resetSubMenu() {
    // Reset 하겠다.
    sideLis.forEach((item) => {
      // item.style.height = sideMenuOffset + "px";
      anime({
        targets: item,
        height: 51,
        background: "#fff",
        easing: "easeInOutQuad",
        duration: 300,
      });
    });
  }

  function showSubMenu(_showNumber) {
    // 모든 li 의 높이를 53 으로 하겠다.
    // Reset 하겠다.
    resetSubMenu();

    // 펼친 번호와 같은 값이 인자로 전달되면
    // 펼침 코드를 실행하지 않는다.
    if (_showNumber === sideOpenNumber) {
      // 펼침 기록 변수 초기화
      sideOpenNumber = undefined;
      // 함수를 중단한다.
      return;
    }

    // _showNumber 에 해당하는 li 의 높이를 변경하겠다.
    sideLis.forEach((item, index) => {
      if (_showNumber === index) {
        // item.style.height = sideOpenHeightArray[_showNumber] + "px";
        anime({
          targets: item,
          height: sideOpenHeightArray[_showNumber],
          background: "#f3f3f3",
          easing: "easeInOutQuad",
          duration: 300,
        });
      }
    });
    // 펼친 번호를 기록한다.
    sideOpenNumber = _showNumber;
  }
});
