// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
  });

// Load modals
fetch("modal.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
  });

// Clock
function updateTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText =
    now.toLocaleTimeString();
}
setInterval(updateTime, 1000);

// Modals
function openHelp() {
  document.getElementById("helpModal").style.display = "flex";
}

function openFeedback() {
  document.getElementById("feedbackModal").style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}