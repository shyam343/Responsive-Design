function toggleMobileMenu(icon) {
    icon.classList.toggle("open");
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
  }
  
  // Ensure mobile menu is hidden on resize to larger screens
  window.addEventListener('resize', () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const desktopMenu = document.querySelector(".desktop-menu");
  
    if (window.innerWidth > 1024) {
      mobileMenu.style.display = "none";
      desktopMenu.style.display = "flex";
    } else {
      desktopMenu.style.display = "none";
    }
  });
  