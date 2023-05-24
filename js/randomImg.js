const images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
];

function openImg() {
  const source = img.src;
  window.open(source);
}

const randomImg = images[Math.floor(Math.random() * images.length)];

const figure = document.querySelector(".randomImg figure");

const img = document.createElement("img");
img.src = `./img/${randomImg}`;
img.onclick = `openImg()`;

figure.appendChild(img);
