// video randeom choose
const videoFile = ["back01", "back02", "back03"];
const backgroundVideo = document.querySelector(".back video");

const choose = videoFile[Math.floor(Math.random() * videoFile.length)];

// insert video file
const source = document.createElement("source");
const sourceVideo = backgroundVideo.appendChild(source);

sourceVideo.setAttribute("src", `./img/background/${choose}.mp4`);
sourceVideo.setAttribute("type", "video/mp4");
