// CAROUSEL
// SEARCH RESULT SLIDERS
function formatSearchCards() {
    const searchSlides = document.querySelectorAll(".search-slide");

    // Current slide counter
    let curSearchSlide = 0;

    // Select next slide button
    const nextSearchSlide = document.querySelector(".search-btn-next");

    //Add event listener and navigation functionality
    nextSearchSlide.addEventListener("click", goToNextSearchCard);

    function goToNextSearchCard() {
        //Check if current slide is the last and reset current slide
        if (curSearchSlide == maxSearchSlide) {
            curSearchSlide = 0;
        } else {
            curSearchSlide++;
        }

        // Move slide by -100%
        searchSlides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSearchSlide)}%)`
        });
    }

    // Select prev slide button
    const prevSearchSlide = document.querySelector(".search-btn-prev")

    // Add event listener and navigation functionality
    prevSearchSlide.addEventListener("click", function () {
        // Check if current slide is the first and reset current slide to last
        if (curSearchSlide === 0) {
            curSearchSlide = maxSearchSlide;
        } else {
            curSearchSlide--;
        }

        // Move slide by 100%
        searchSlides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSearchSlide)}%)`
        });
    });

    // Maximum number of slides
    let maxSearchSlide = searchSlides.length - 1;
}

formatSearchCards();

