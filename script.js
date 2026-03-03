document.addEventListener("DOMContentLoaded", function () {

  // Load header first
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      startClock();
      highlightActiveTab();
      attachHeaderEvents();
    });

  // Load modals
  fetch("modal.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    });

});

function startClock() {
  function updateTime() {
    const now = new Date();
    const el = document.getElementById("clockText");
    if (el) {
      el.innerText = now.toLocaleTimeString();
    }
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function highlightActiveTab() {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-tabs .tab").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

function attachHeaderEvents() {
  const helpIcon = document.getElementById("helpIcon");
  const commentIcon = document.getElementById("commentIcon");

  if (helpIcon) {
    helpIcon.addEventListener("click", () => {
      const modal = document.getElementById("helpModal");
      if (modal) modal.style.display = "flex";
    });
  }

  if (commentIcon) {
    commentIcon.addEventListener("click", () => {
      const modal = document.getElementById("feedbackModal");
      if (modal) modal.style.display = "flex";
    });
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}
