// script.js

// Dark mode toggle
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.id = "dark-mode-toggle";

// Append toggle button inside nav of every page (if header exists)
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (header) {
    header.appendChild(toggleBtn);
  }

  // Check user preference from localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
  }

  toggleBtn.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    if (isDark) {
      localStorage.setItem("darkMode", "enabled");
      toggleBtn.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleBtn.textContent = "🌙 Dark Mode";
    }
  });
});

// Contact form demo feedback
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks! Your message has been sent (demo).");
      form.reset();
    });
  }
});