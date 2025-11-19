const html = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
  btn.classList.toggle("active");
}

btn.addEventListener("click", toggleTheme);
