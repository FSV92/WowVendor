function initPromoSlider() {
  let swiper = new Swiper(".promo__swiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    navigation: {
      nextEl: ".promo__swiper-button-next",
      prevEl: ".promo__swiper-button-prev",
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initPromoSlider();
});
