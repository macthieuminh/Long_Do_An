window.addEventListener("load", function () {
    const slider = document.querySelector(".section__slider");
    const sliderMain = document.querySelector(".slider__main");
    const sliderItems = document.querySelectorAll(".slider__image");
    const dotItem = document.querySelector(".slider__dot");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let currentPosition = 0;
    let index = 0;
    nextBtn.addEventListener("click", function () {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener("click", function () {
        handleChangeSlide(-1);
    });
    function handleChangeSlide(direction) {
        if (direction === 1) {
            index++;
            if (index >= slidesLength) return;
            currentPosition = currentPosition - sliderItemWidth;
            sliderMain.style = `transform: translateX(${currentPosition})`;
            console.log(index);
        } else if (direction === -1) {
            console.log(index);
        }
    }
});
