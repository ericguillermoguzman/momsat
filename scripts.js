window.onload = function() {

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const images = [
  "assets/003.jpg",
  "assets/005.jpg",
  "assets/002.jpg",
  "assets/004.jpg",
  // Add more images as needed
];

let currentImageIndex = 0;



function changeBackground() {
  const container = document.getElementById("bg");
  container.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackground, 10000); // Change the background every 5 seconds

}
