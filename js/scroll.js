document.querySelectorAll(".scroll_btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const popover = btn.closest("[popover]");
    if (!popover) return;

    popover.scrollTo({
      top: popover.scrollHeight,
      behavior: "smooth",
    });
  });
});
