const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function (e) {
    if (!e.target.classList.contains("active")) {
      const activePanel = document.querySelector(".active");
      activePanel.classList.remove("active");
      e.target.classList.add("active");
    }
  });
});
