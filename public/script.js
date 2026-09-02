document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const dropdown = document.querySelector(".dropdown");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("open");
      dropdownToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
