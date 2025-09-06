// Update jellyfin icon on overview page to cineplex
document.querySelectorAll("img.MuiBox-root.css-1j3tjfb").forEach((img) => {
  img.src = "./assets/img/icon-transparent.png";
});

// Hide "Startseite" and "Favoriten" menu items
// Find all menu items
const menuItems = document.querySelectorAll(
  ".sectionTabs .emby-button, .emby-button-foreground"
);
// Iterate through each menu item
menuItems.forEach((item) => {
  // Check the text content
  if (
    item.textContent.trim() === "Startseite" ||
    item.textContent.trim() === "Favoriten"
  ) {
    // Hide the element
    item.style.display = "none";
  }
});
