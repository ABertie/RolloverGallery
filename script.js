const ABertieRolloverGallery = (function () {
    function init(allSrc) {
        const BIGPICTURE = document.querySelector(".rolloverGallery__bigPicture");
        const SMALLPICTURES = document.querySelector(".rolloverGallery__smallPictures");
        const ALLPICTURES = allSrc;

        var index = 0;
        BIGPICTURE.src = ALLPICTURES[index];
        ALLPICTURES.forEach(function (element) {
            const IMG = document.createElement("img")
            IMG.src = element;
            IMG.classList.add("rolloverGallery__smallPictures--picture")
            SMALLPICTURES.appendChild(IMG);
        });
        const PICTURE = SMALLPICTURES.querySelectorAll(".rolloverGallery__smallPictures--picture")

        PICTURE.forEach(function (picture, i) {
            picture.addEventListener("mouseover", function () {
                index = i;
                BIGPICTURE.src = ALLPICTURES[index];
            });
            picture.addEventListener("click", function () {
                index = i;
                BIGPICTURE.src = ALLPICTURES[index];
            });
        });
    } return { init }
})()