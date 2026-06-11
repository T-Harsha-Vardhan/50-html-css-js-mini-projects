const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currActiveStep = 1;

const updateUI = () => {
  if (currActiveStep === 1) {
    if (!prevBtn.classList.contains("disable")) {
      prevBtn.classList.add("disable");
      prevBtn.classList.remove("enable");
    }
  } else {
    if (!prevBtn.classList.contains("enable")) {
      prevBtn.classList.add("enable");
      prevBtn.classList.remove("disable");
    }
  }

  if (currActiveStep === circles.length) {
    if (!nextBtn.classList.contains("disable")) {
      nextBtn.classList.add("disable");
      nextBtn.classList.remove("enable");
    }
  } else {
    if (!nextBtn.classList.contains("enable")) {
      nextBtn.classList.add("enable");
      nextBtn.classList.remove("disable");
    }
  }

  const progressWidth = ((currActiveStep - 1) / (circles.length - 1)) * 100;

  progress.style.width = `${progressWidth}%`;

  circles.forEach((circle, id) => {
    if (id + 1 <= currActiveStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
};

prevBtn.addEventListener("click", () => {
  if (currActiveStep !== 1) {
    currActiveStep -= 1;
  }
  updateUI();
});

nextBtn.addEventListener("click", () => {
  if (currActiveStep < circles.length) {
    currActiveStep += 1;
  }
  updateUI();
});
