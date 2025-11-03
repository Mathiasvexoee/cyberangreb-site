document.querySelector("#Book").addEventListener("click", ClickInfoboxBook);
document.querySelector("#Laptop").addEventListener("click", ClickInfoboxLaptop);
document.querySelector("#Head").addEventListener("click", ClickInfoboxHead);
function ClickInfoboxBook() {
  document.querySelector("#Book").classList.add("darker");
  document.querySelector("#efficiency").textContent = "bog";
  document.querySelector("#requirement").textContent = "bog2";
  document.querySelector("#Laptop").classList.remove("darker");
  document.querySelector("#Head").classList.remove("darker");
}
function ClickInfoboxLaptop() {
  document.querySelector("#Laptop").classList.add("darker");
  document.querySelector("#efficiency").textContent = "laptop";
  document.querySelector("#requirement").textContent = "laptop2";
  document.querySelector("#Book").classList.remove("darker");
  document.querySelector("#Head").classList.remove("darker");
}
function ClickInfoboxHead() {
  document.querySelector("#Head").classList.add("darker");
  document.querySelector("#efficiency").textContent = "head";
  document.querySelector("#requirement").textContent = "head2";
  document.querySelector("#Book").classList.remove("darker");
  document.querySelector("#Laptop").classList.remove("darker");
}

document.querySelector("#Book").addEventListener("mouseenter", HoverInBook);
document.querySelector("#Laptop").addEventListener("mouseenter", HoverInLaptop);
document.querySelector("#Head").addEventListener("mouseenter", HoverInHead);
document.querySelector("#Book").addEventListener("mouseleave", HoverOutBook);
document.querySelector("#Laptop").addEventListener("mouseleave", HoverOutLaptop);
document.querySelector("#Head").addEventListener("mouseleave", HoverOutHead);
function HoverInBook() {
  document.querySelector("#Book").classList.add("brighter");
}
function HoverInLaptop() {
  document.querySelector("#Laptop").classList.add("brighter");
}
function HoverInHead() {
  document.querySelector("#Head").classList.add("brighter");
}
function HoverOutBook() {
  document.querySelector("#Book").classList.remove("brighter");
}
function HoverOutLaptop() {
  document.querySelector("#Laptop").classList.remove("brighter");
}
function HoverOutHead() {
  document.querySelector("#Head").classList.remove("brighter");
}
