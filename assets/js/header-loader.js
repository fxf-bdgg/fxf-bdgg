document.addEventListener("DOMContentLoaded", async () => {
  const target = document.getElementById("site-header");
  if (!target) return;

  try {
    const response = await fetch("header.html");
    if (!response.ok) throw new Error(`Failed to load header.html: ${response.status}`);

    const html = await response.text();
    target.innerHTML = html;

    document.dispatchEvent(new Event("headerLoaded"));
  } catch (error) {
    console.error("Header load error:", error);
  }
});
