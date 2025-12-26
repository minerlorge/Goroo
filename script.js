// simple glitch effect
const logo = document.querySelector(".logo");

setInterval(() => {
  logo.style.opacity = Math.random() * (1 - 0.7) + 0.7;
}, 120);
