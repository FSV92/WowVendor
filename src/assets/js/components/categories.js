let listCategories = document.querySelector(".products__category-list");
let tabsInDropdown = document
  .querySelector(".products__category-dropdown")
  .querySelectorAll(".products__category-dropdown-item");

listCategories.addEventListener("click", () => {
  listCategories
    .closest(".products__category")
    .classList.toggle("products__category--active");
});

let insertCountTabs = () => {
  let count = 0;
  tabsInDropdown.forEach((tab) => {
    let currentDisplay = getComputedStyle(tab).display;
    if (currentDisplay != "none") {
      count++;
    }
  });

  listCategories.querySelector(".products__category-text-count").textContent =
    count;
};

insertCountTabs();
window.addEventListener("resize", insertCountTabs);
