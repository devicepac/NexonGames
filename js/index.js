window.onload = function () {
  // 모달창 처리
  let body = document.querySelector("body");
  body.classList.add("modal-active");
  let modal = document.querySelector(".modal");
  modal.onclick = function () {
    body.classList.remove("modal-active");
    modal.style.display = "none";
  };
};
