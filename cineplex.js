document.addEventListener("DOMContentLoaded", () => {
  // Update jellyfin icon on overview page to cineplex
  document.querySelectorAll("img.MuiBox-root.css-1j3tjfb").forEach(img => {
    img.src = "./assets/img/icon-transparent.png";
  });
});
