document.addEventListener("DOMContentLoaded", async () => {
  const target = document.getElementById("site-footer");
  if (!target) return;

  const base = window.SITE_BASE || "";

  try {
    const response = await fetch(`${base}footer.html`);
    if (!response.ok) throw new Error("Failed to load footer");

    target.innerHTML = await response.text();

    requestAnimationFrame(() => {
      target.classList.add("loaded");
    });
  } catch (err) {
    console.error("Footer failed:", err);
  }
});
