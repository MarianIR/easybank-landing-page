const navList = document.querySelector(".nav-list");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const handleMenuVisibility = () => {
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 969) {
    navList.style.display = "flex";
    openMenu.style.display = "none";
  } else {
    navList.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
  }
};

// Initial check on page load
handleMenuVisibility();

// Listen for window resize events
window.addEventListener("resize", handleMenuVisibility);

openMenu.addEventListener("click", () => {
  navList.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  navList.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
});
