let bars = document.querySelector(".fa-bars");
let links = document.querySelector("ul.links");
let xMark = document.querySelector(".fa-xmark");

bars.addEventListener("click", function () {
  links.classList.toggle("drop-down");
  bars.style.display = "none";
  xMark.style.display = "flex";
});
xMark.addEventListener("click", function () {
  links.classList.toggle("drop-down");
  bars.style.display = "flex";
  xMark.style.display = "none";
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    bars.style.display = "none";
    xMark.style.display = "none";
    links.classList.remove("drop-down");
  } else {
    bars.style.display = "flex";
    xMark.style.display = "none";
  }
});

// project gallery

let imgs = document.querySelectorAll(".imgs img");
let left = document.querySelector(".fa-arrow-left");
let right = document.querySelector(".fa-arrow-right");
let currentImg = 0;

for (let i = 0; i < imgs.length; i++) {
  imgs[i].setAttribute("src", `imgs/${i + 1}.png`);
  if (i === currentImg) {
    imgs[i].classList.add("active-img");
  }
}
left.onclick = function () {
  imgs[currentImg].classList.remove("active-img");
  currentImg--;
  if (currentImg < 0) {
    currentImg = imgs.length - 1;
  }
  imgs[currentImg].classList.add("active-img");
};
right.onclick = function () {
  imgs[currentImg].classList.remove("active-img");
  currentImg++;
  if (currentImg >= imgs.length) {
    currentImg = 0;
  }
  imgs[currentImg].classList.add("active-img");
};
