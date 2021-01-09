const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
var slideInterval;

const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for the next slide
    if (current.nextElementSibling) {
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }
    else {
        //Add current to start
        slide[0].classList.add('current');
        setTimeout(() => current.classList.remove('current'));
    }
}
    ;

const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for the prev slide
    if (current.previousElementSibling) {
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slide[slide.length - 1].classList.add('current');
        setTimeout(() => current.classList.remove('current'));
    }
}


nextBtn.addEventListener('click', () => {
    nextSlide();
    /*after clicking the nextSlide it wil wait again 5 sec*/
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    /*after clicking the nextSlide it wil wait again 5 sec*/
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}