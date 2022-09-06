const slides = document.querySelectorAll(".slider-container .slide");
const dots = document.querySelector(".dots");
const arrows = document.querySelectorAll(".arrows i");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
for (let i = 0; i < slides.length; i++) {
  if (i === 0) {
    dots.innerHTML += `<div class="dot active" data-id="${i}"></div>`;
  } else {
    dots.innerHTML += `<div class="dot" data-id="${i}"></div>`;
  }
}

const dotControl = (index) => {
  document.querySelectorAll(".dot").forEach((i) => {
    i.classList.remove("active");
  });

  document.querySelector(`.dot[data-id = '${index}']`).classList.add("active");
};

const changeImg = () => {
  if (counter < slides.length - 1) {
    arrows[1].style.visibility = "visible";
  } else {
    arrows[1].style.visibility = "hidden";
  }
  if (counter > 0) {
    arrows[0].style.visibility = "visible";
  } else {
    arrows[0].style.visibility = "hidden";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  dotControl(counter);
};

// Prev Button
arrows[0].addEventListener("click", () => {
  counter--;
  changeImg();
  return counter;
});
arrows[0].style.visibility = "hidden";
// Next Button
arrows[1].addEventListener("click", () => {
  counter++;
  changeImg();
  return counter;
});
