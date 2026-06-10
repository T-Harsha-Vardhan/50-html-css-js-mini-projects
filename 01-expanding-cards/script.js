const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function (e) {
    if (!panel.classList.contains("active")) {
      const activePanel = document.querySelector(".active");
      activePanel.classList.remove("active");
      panel.classList.add("active");
    }
  });
});
