const BIGPICTURE = document.querySelector(".rolloverGallery__bigPicture");
const SMALLPICTURES = document.querySelector(".rolloverGallery__smallPictures");

const ALLPITURES = ['img/pexels-david-bartus-1166209.jpg','img/pexels-francesco-ungaro-2325446.jpg','img/pexels-ian-beckley-2440021.jpg','img/pexels-jaime-reimer-2662116.jpg','img/pexels-tyler-lastovich-808465.jpg']

var index = 0;

BIGPICTURE.src = ALLPITURES[index];

ALLPITURES.forEach(function(element) {
    const IMG = document.createElement("img")
    IMG.src = element;
    IMG.classList.add("rolloverGallery__smallPictures--picture")
    SMALLPICTURES.appendChild(IMG);
});
const PITURE = document.querySelectorAll(".rolloverGallery__smallPictures--picture")

