document.addEventListener('DOMContentLoaded', () => {
  const NEW_NAME = 'Cineplex';

  // Site title (Browser-Tab)
  document.title = NEW_NAME;

  // title top left corner
  document.querySelectorAll('.pageTitle span').forEach(el => el.textContent = NEW_NAME);

  // Fallback: Replace all occurences of 'Jellyfin' (carefully!)
  const walk = (n) => {
    const skip = new Set(['SCRIPT','STYLE','NOSCRIPT']);
    if (!n || skip.has(n.nodeName)) return;
    if (n.nodeType === 3 && n.nodeValue.includes('Jellyfin')) {
      n.nodeValue = n.nodeValue.replaceAll('Jellyfin', NEW_NAME);
    } else {
      n.childNodes && n.childNodes.forEach(walk);
    }
  };
  walk(document.body);
});
