document.addEventListener("DOMContentLoaded", async () => {
  const target = document.getElementById("site-footer");
  if (!target) return;

  try {
    const response = await fetch("footer.html"); // 🔥 same fix
    if (!response.ok) throw new Error("Failed to load footer");

    target.innerHTML = await response.text();
  } catch (err) {
    console.error("Footer failed:", err);
  }
});
