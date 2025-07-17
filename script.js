function toggleReadMore(btn) {
  const moreText = btn.previousElementSibling.querySelector(".more");
  const dots = btn.previousElementSibling.querySelector(".dots");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read Less";
  }
}

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const resumeBtn = document.getElementById("downloadResume");
  const githubBtn = document.getElementById("visitGitHub");

  resumeBtn.addEventListener("click", function () {
    window.location.href ="https://drive.google.com/file/d/14cYgEQObMWYM2c6-n9NIgBH1lx9GF3np/view?usp=drivesdk";
  });

  githubBtn.addEventListener("click", function () {
    window.open("https://github.com/Vishwas-Tiwari", "_blank");
  });
});


