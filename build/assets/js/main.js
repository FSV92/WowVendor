"use strict";

var btnAdd = document.querySelector(".products__add-card-btn");

var addCard = function addCard() {
  var imgSrc = "./assets/images/content/prod-1.jpg";
  var genre = "Multiplayer RPG";
  var genreModificator = genre.toLowerCase().replace(" ", "-");
  var title = "Saints Row";
  var description = "Platinum Edition";
  var countRatings = 1820;
  var countRatingsString = countRatings.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var price = 1500;
  var priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var discount = 50;
  var rating = 4.5;
  var discountHtml = "";
  var newPriceHtml = "";
  var priceHtml = "";

  if (discount) {
    var newPrice = Math.trunc(price * discount / 100);
    var newPriceString = newPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    discountHtml = "<span class=\"products__card-discount\">-".concat(discount, "%</span>");
    newPriceHtml = "<span class=\"products__card-price\">$".concat(newPriceString, "</span>");
    priceHtml = "<span class=\"products__card-price-old\">$".concat(priceString, "</span>");
  } else {
    priceHtml = "<span class=\"products__card-price\">$".concat(priceString, "</span>");
  }

  var stars = "";
  var starClass;
  var maxStars = 5;

  for (var i = 0; i < maxStars; i++) {
    var difference = rating - i;

    if (difference > 0 && difference < 1) {
      starClass = "products__card-rating-star--half";
    } else if (difference > 0) {
      starClass = "products__card-rating-star--active";
    } else {
      starClass = "";
    }

    var star = "<div class=\"products__card-rating-star ".concat(starClass, "\" > <svg> <use xlink:href=\"#star\"></use> </svg> </div>");
    stars += star;
  }

  var classEmersion = "emersion";
  var html = "<div class=\"products__card-wrap\"> <div class=\"products__card ".concat(classEmersion, "\"> <img src=\"").concat(imgSrc, "\" class=\"products__card-img\" /> <div class=\"products__card-info\"> <div class=\"products__card-genre products__card-genre--").concat(genreModificator, "\" > <div class=\"products__card-genre-point\"></div> <span class=\"products__card-genre-text\">").concat(genre, "</span> </div> <h3 class=\"products__card-title\">").concat(title, "</h3> <div class=\"products__card-rating\"><div class=\"products__card-rating-stars\">").concat(stars, "</div>  <span class=\"products__card-rating-count\">").concat(countRatingsString, "</span> </div> <div class=\"products__card-desc\">").concat(description, "</div> <div class=\"products__card-bottom\">").concat(priceHtml, " ").concat(newPriceHtml, " ").concat(discountHtml, " </div> </div> </div> </div>");
  btnAdd.closest(".products__card-wrap").insertAdjacentHTML("afterend", html);
  setTimeout(function () {
    document.querySelector(".emersion").classList.add("emersion--finished");
  }, 200);
};

btnAdd.addEventListener("click", addCard);
"use strict";

var btnsRoll = document.querySelectorAll(".asks__item-roll");
btnsRoll.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest(".asks__item").classList.toggle("asks__item--show-answer");
  });
});
"use strict";

var listCategories = document.querySelector(".products__category-list");
var tabsInDropdown = document.querySelector(".products__category-dropdown").querySelectorAll(".products__category-dropdown-item");
listCategories.addEventListener("click", function () {
  listCategories.closest(".products__category").classList.toggle("products__category--active");
});

var insertCountTabs = function insertCountTabs() {
  var count = 0;
  tabsInDropdown.forEach(function (tab) {
    var currentDisplay = getComputedStyle(tab).display;

    if (currentDisplay != "none") {
      count++;
    }
  });
  listCategories.querySelector(".products__category-text-count").textContent = count;
};

insertCountTabs();
window.addEventListener("resize", insertCountTabs);
"use strict";

var element = document.querySelector(".js-choice");
var choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});
"use strict";

function initPromoSlider() {
  var swiper = new Swiper(".promo__swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".promo__swiper-button-next",
      prevEl: ".promo__swiper-button-prev"
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initPromoSlider();
});