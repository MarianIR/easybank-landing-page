const navList = document.querySelector(".nav-list");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const heroSection = document.querySelector(".hero");
openMenu.addEventListener("click", (e) => {
  e.preventDefault();
  heroSection.style.opacity = ".5";
  navList.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", (e) => {
  e.preventDefault();
  heroSection.style.opacity = "1";
  navList.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
