loadScripts()
async function loadScripts() {
  const response = await fetch('./Scripts/');
  const text = await response.text();

  // Create a temporary DOM to parse the folder listing
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');

  // Find all links (assuming directory listing is enabled)
  const links = doc.querySelectorAll('a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href.endsWith('.html')) {
      const collectedName = href.replace(/\.html$/, '');
      create(`
        <div class=cs>
          <button onclick="window.location.href = '${collectedName}.html'">
            ${collectedName.replace("gam", "game")}.cs
          </button>
        </div>
      `, "scr");
    }
  });
}
