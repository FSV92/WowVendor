let btnsRoll = document.querySelectorAll(".asks__item-roll");

btnsRoll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".asks__item").classList.toggle("asks__item--show-answer");
  });
});
