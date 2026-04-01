'use strict';


// ハンバーガーメニュー
{
  let nav = document.querySelector("#navArea");
  let btn = document.querySelector(".toggle-btn");
  let mask = document.querySelector("#mask");
  let navLinks = document.querySelectorAll("#navArea a");

  btn.onclick = () => {
    nav.classList.toggle("open");
  };

  mask.onclick = () => {
    nav.classList.remove("open");
  };

  navLinks.forEach((link) => {
    link.onclick = () => {
      nav.classList.remove("open");
    };
  });
}


