let slideNumber = 1;
ourSlide(slideNumber);

function slaidNext() { 
    ourSlide(slideNumber += 1);
}
function slaidPrevui() {
    ourSlide(slideNumber -= 1);  
}




function currentSlide(n) {
    ourSlide(slideNumber = n);
}

//слайдер
function ourSlide(n) {
    let i;
    let ourSlides = document.getElementsByClassName('slides');
    if (n > ourSlides.length) {
        slideNumber = 1
    }
    if (n < 1) {
        slideNumber = ourSlides.length;
    }
    for (i = 0; i < ourSlides.length; i++) {
        ourSlides[i].style.display = "none";
    }
     
    ourSlides[slideNumber - 1].style.display = "block";
    
}