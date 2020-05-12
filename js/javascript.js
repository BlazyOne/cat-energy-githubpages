var navToggle = document.querySelector(".page-header__nav-toggle");
var nav = document.querySelector(".page-header__nav");

navToggle.classList.remove("js-hide");
navToggle.classList.add("page-header__nav-toggle--closed");
nav.classList.add("page-header__nav--closed");

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("page-header__nav-toggle--closed");
  nav.classList.toggle("page-header__nav--closed");
});
