let btnAdd = document.querySelector(".products__add-card-btn");

let addCard = () => {
  let imgSrc = "./assets/images/content/prod-1.jpg";
  let genre = "Multiplayer RPG";
  let genreModificator = genre.toLowerCase().replace(" ", "-");
  let title = "Saints Row";
  let description = "Platinum Edition";
  let countRatings = 1820;
  let countRatingsString = countRatings
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  let price = 1500;
  let priceString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let discount = 50;
  let rating = 4.5;

  let discountHtml = "";
  let newPriceHtml = "";
  let priceHtml = "";

  if (discount) {
    let newPrice = Math.trunc((price * discount) / 100);
    let newPriceString = newPrice
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    discountHtml = `<span class="products__card-discount">-${discount}%</span>`;
    newPriceHtml = `<span class="products__card-price">$${newPriceString}</span>`;
    priceHtml = `<span class="products__card-price-old">$${priceString}</span>`;
  } else {
    priceHtml = `<span class="products__card-price">$${priceString}</span>`;
  }

  let stars = "";
  let starClass;
  let maxStars = 5;
  for (let i = 0; i < maxStars; i++) {
    let difference = rating - i;

    if (difference > 0 && difference < 1) {
      starClass = `products__card-rating-star--half`;
    } else if (difference > 0) {
      starClass = `products__card-rating-star--active`;
    } else {
      starClass = "";
    }
    let star = `<div class="products__card-rating-star ${starClass}" > <svg> <use xlink:href="#star"></use> </svg> </div>`;
    stars += star;
  }

  let classEmersion = "emersion";
  let html = `<div class="products__card-wrap"> <div class="products__card ${classEmersion}"> <img src="${imgSrc}" class="products__card-img" /> <div class="products__card-info"> <div class="products__card-genre products__card-genre--${genreModificator}" > <div class="products__card-genre-point"></div> <span class="products__card-genre-text">${genre}</span> </div> <h3 class="products__card-title">${title}</h3> <div class="products__card-rating"><div class="products__card-rating-stars">${stars}</div>  <span class="products__card-rating-count">${countRatingsString}</span> </div> <div class="products__card-desc">${description}</div> <div class="products__card-bottom">${priceHtml} ${newPriceHtml} ${discountHtml} </div> </div> </div> </div>`;

  btnAdd.closest(".products__card-wrap").insertAdjacentHTML("afterend", html);

  setTimeout(() => {
    document.querySelector(".emersion").classList.add("emersion--finished");
  }, 200);
};

btnAdd.addEventListener("click", addCard);
