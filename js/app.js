const slides = document.querySelectorAll(".slider-container .slide");
const dots = document.querySelector(".dots");
const arrows = document.querySelectorAll(".arrows i");

let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

for (let i = 0; i < slides.length; i++) {
  if (i === 0) {
    dots.innerHTML += `<div class="dot active" data-id="${i}"></div>`;
  } else {
    dots.innerHTML += `<div class="dot" data-id="${i}"></div>`;
  }
}

dots.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  counter = id;
  changeImg();
});

const dotControl = (index) => {
  document.querySelectorAll(".dot").forEach((i) => {
    i.classList.remove("active");
  });

  document.querySelector(`.dot[data-id = '${index}']`).classList.add("active");
};

const changeImg = () => {
  if (counter > slides.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach((slide) => {
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

// Next Button
arrows[1].addEventListener("click", () => {
  counter++;
  changeImg();
  return counter;
});

setInterval(() => {
  counter++;
  changeImg();
}, 3000);
