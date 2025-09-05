# Cineplex (Jellyfin Theme)

A modern, Netflix-inspired theme and branding pack for Jellyfin, designed to deliver a sleek, cinematic experience. Includes custom CSS, JavaScript enhancements, and alternative assets.

## Features

- **Cineplex Theme**: Netflix-like look for Jellyfin, with accent colors, rounded corners, and modern typography.
- **Slideshow Addon**: Enhanced slideshow for featured content.
- **Finity Theme Integration**: Includes and extends the popular Finity theme.
- **Easy Customization**: All styles and scripts are modular and easy to modify.
- **Menu Customization**: Hides unwanted menu items for a more clean style.

## File Overview

- `cineplex.css` – Main theme CSS, imports Finity and icon themes, sets color variables.
- `cineplex.js` – JavaScript for UI tweaks (icon replacement, menu hiding).
- `custom.css` – Additional custom styles and font imports.
- `finity-theme/` – Contains Finity theme and slideshow files:
  - `finity-complete.css` – Full Finity theme CSS.
  - `slideshowpure.css` / `slideshowpure.js` – Slideshow styles and logic.

## Installation _draft – do not follow this steps yet_

1. **Backup** your current Jellyfin custom CSS/JS and branding.
2. Copy the contents of this repository into your Jellyfin custom web directory.
3. In Jellyfin Admin Panel, go to **Dashboard > General > Custom CSS** and paste the contents of `cineplex.css` (or `custom.css` for the alternate style).
4. For JavaScript enhancements, use a plugin like [CustomJS](https://github.com/CTalvio/CustomJS) or inject via browser extension, and add `cineplex.js` and `rebranding/branding.js`.
5. Replace logos in your Jellyfin server with the ones in `rebranding/` for a complete rebrand.

## Screenshots

> _Screenshots coming soon_

## Credits

This theme is more like a puzzle of multiple themes in addition to own customizations for the perfect Netflix look.

- **Finity Theme**: [Finity by M0RPH3US](https://github.com/M0RPH3US-MG/Finity)
- **Slideshow**: Modified by prism2001, original by M0RPH3US

## License

MIT License. See [LICENSE](LICENSE) for details.
