const hamb = document.querySelector(".navigation__hamb");
const menuIsOpen = document.querySelector(".navigation__list");
const hambLine = document.querySelectorAll(".navigation__hamb-line");

hamb.addEventListener("click", function () {
  hambLine.forEach((line) => line.classList.toggle("show"));
  menuIsOpen.classList.toggle("flex-center");

  hamb.classList.toggle("show");
  menuIsOpen.classList.toggle("menu-is-open");
});

const searchPopup = document.querySelector(".header__search-popup");
const searchLogo = document.querySelector(".header__logo");
const searchButton = document.querySelector(".header__search");
const closeSearchButton = document.querySelector(".header__close-icon");

searchButton.addEventListener("click", function () {
  if (searchPopup.classList.contains("show")) {
    searchPopup.classList.remove("show");
  } else {
    searchPopup.classList.add("show");
  }

  if (
    searchLogo.classList.contains("hidden") &&
    searchButton.classList.contains("hidden")
  ) {
    searchLogo.classList.remove("hidden");
    searchButton.classList.remove("hidden");
  } else {
    searchLogo.classList.add("hidden");
    searchButton.classList.add("hidden");
  }
});

closeSearchButton.addEventListener("click", function () {
  searchPopup.classList.toggle("show");

  if (!searchPopup.classList.contains("show")) {
    searchLogo.classList.remove("hidden");
    searchButton.classList.remove("hidden");
  }
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const tabsButton = document.querySelectorAll(".tabs__nav-button");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsButton.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentButton = item;
    let tabId = currentButton.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentButton.classList.contains("active")) {
      tabsButton.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentButton.classList.add("active");
      currentTab.classList.add("active");
    }
  });
});

const accordionButtons = document.querySelectorAll(".fag__accordion-button");
const accordionItems = document.querySelectorAll(".fag__accordion-item");

accordionButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const currentItem = item.closest(".fag__accordion-item");
    const remainingAccordionItems = Array.from(accordionItems).filter(function (
      item
    ) {
      return item !== currentItem;
    });
    remainingAccordionItems.forEach(function (item) {
      item.classList.remove("show");
    });
    currentItem.classList.toggle("show");
  });
});
