const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removePreviousClass();
    panel.classList.add("active");
  });
});

function removePreviousClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
