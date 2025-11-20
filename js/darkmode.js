// const html = document.querySelector("html");
// const btn = document.querySelector("#dark-mode");
// const toggleText = document.querySelector(".toggle-text");

// function toggleTheme() {
//   html.classList.toggle("dark");

//   toggleText.classList.add("fade-out");

//   setTimeout(() => {
//     if (btn.checked) {
//       toggleText.textContent = "Dark";
//       toggleText.style.transform = "translateX(-0.75em)";
//       toggleText.style.color = "#000000";
//     } else {
//       toggleText.textContent = "Light";
//       toggleText.style.transform = "translateX(0.75em)";
//       toggleText.style.color = "#ffffff";
//     }

//     toggleText.classList.remove("fade-out");
//   }, 200);
// }

// btn.addEventListener("click", toggleTheme);
const html = document.querySelector("html");
const btn = document.querySelector("#dark-mode");
const toggleText = document.querySelector(".toggle-text");

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  html.classList.add("dark");
  btn.checked = true;

  toggleText.textContent = "Dark";
  toggleText.style.transform = "translateX(-0.75em)";
  toggleText.style.color = "#000000";
} else {
  btn.checked = false;

  toggleText.textContent = "Light";
  toggleText.style.transform = "translateX(0.75em)";
  toggleText.style.color = "#ffffff";
}

// Toggle theme on click
function toggleTheme() {
  html.classList.toggle("dark");

  // save preference
  localStorage.setItem("theme", btn.checked ? "dark" : "light");

  // Fade out
  toggleText.classList.add("fade-out");

  setTimeout(() => {
    if (btn.checked) {
      toggleText.textContent = "Dark";
      toggleText.style.transform = "translateX(-0.75em)";
      toggleText.style.color = "#000000";
    } else {
      toggleText.textContent = "Light";
      toggleText.style.transform = "translateX(0.75em)";
      toggleText.style.color = "#ffffff";
    }

    toggleText.classList.remove("fade-out");
  }, 200);
}

btn.addEventListener("click", toggleTheme);
