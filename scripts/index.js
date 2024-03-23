let pastEditionsPrev, pastEditionsNext;
let pastEditionsIdx = 0;

let testimonialsPrev, testimonialsNext;
let testimonialsIdx = 0;

addEventListener("DOMContentLoaded", () => {
    const pastEditionSliders = document.querySelectorAll(".past-editions-s");
    const pastEditionsIndicators = document.querySelectorAll(".past-editions-indicator");

    const testimonialSliders = document.querySelectorAll(".testimonials-s");
    const testimonialIndicators = document.querySelectorAll(".testimonials-indicator");

    pastEditionsPrev = document.getElementById("past-editions-prev");
    pastEditionsNext = document.getElementById("past-editions-next");
    testimonialsPrev = document.getElementById("testimonials-prev");
    testimonialsNext = document.getElementById("testimonials-next");

    updateSlider(pastEditionSliders, pastEditionsIndicators, pastEditionsIdx);

    pastEditionsPrev.addEventListener("click", (_event) => {
        pastEditionsIdx--;
        if (pastEditionsIdx < 0) {
            pastEditionsIdx = pastEditionSliders.length - 1;
        }
        updateSlider(pastEditionSliders, pastEditionsIndicators, pastEditionsIdx);
    });

    pastEditionsNext.addEventListener("click", (_event) => {
        pastEditionsIdx++;
        if (pastEditionsIdx >= pastEditionSliders.length) {
            pastEditionsIdx = 0;
        }
        updateSlider(pastEditionSliders, pastEditionsIndicators, pastEditionsIdx);
    });

    updateSlider(testimonialSliders, testimonialIndicators, testimonialsIdx);

    testimonialsPrev.addEventListener("click", (_event) => {
        testimonialsIdx = getChecked(testimonialSliders);
        if (testimonialsIdx >= 0) {
            testimonialsIdx--;
            if (testimonialsIdx < 0) {
                testimonialsIdx = testimonialSliders.length - 1;
            }
            updateSlider(testimonialSliders, testimonialIndicators, testimonialsIdx);
        }
    });

    testimonialsNext.addEventListener("click", (_event) => {
        testimonialsIdx = getChecked(testimonialSliders);
        console.log(testimonialsIdx);
        if (testimonialsIdx >= 0) {
            testimonialsIdx++;
            if (testimonialsIdx >= testimonialSliders.length) {
                testimonialsIdx = 0;
            }
            updateSlider(testimonialSliders, testimonialIndicators, testimonialsIdx);
        }
    });

    document.querySelectorAll('label').forEach(label => {
        label.addEventListener('click', () => {
            setTimeout(() => {
                pastEditionsIdx = getChecked(pastEditionSliders);
                testimonialsIdx = getChecked(testimonialSliders);
                updateSlider(pastEditionSliders, pastEditionsIndicators, pastEditionsIdx);
                updateSlider(testimonialSliders, testimonialIndicators, testimonialsIdx);
            }, 0);
        });
    });

    pastEditionsIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            pastEditionsIdx = index;
            updateSlider(pastEditionSliders, pastEditionsIndicators, pastEditionsIdx);
        });
    });

    testimonialIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            testimonialsIdx = index;
            updateSlider(testimonialSliders, testimonialIndicators, testimonialsIdx);
        });
    });
});

function getChecked(sliders) {
    let res = -1;
    sliders.forEach((element, idx) => {
        if (element.checked === true)
            res = idx;
    });
    return res;
}

function updateSlider(sliders, indicators, newIdx) {
    sliders.forEach(element => {
        element.checked = false;
    });

    sliders[newIdx].checked = true;

    if (indicators.length > 0) {
        indicators.forEach((element, idx) => {
            element.children[0].className = 'bi bi-circle';
            if (idx === newIdx) {
                element.children[0].className = 'bi bi-circle-fill';
            }
        });
    }
}