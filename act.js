
// скроллинг
(function(){
    'use strict';

    function backToTop(){
        if (window.pageYOffset > 0){
            window.scrollBy(0, -10);
            setTimeout(backToTop, 10);
        }
    }
    var goToTop = document.getElementById("scrolltop");
    goToTop.addEventListener('click', backToTop)
})();

// большой слайдер(ограниченный)
var slideIndex = 1;

function plusSlide(){
    showSlides(slideIndex += 1, ' right');
}
function minusSlide(){
    showSlides(slideIndex -= 1, ' left');
}

function showSlides(n, direction){
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider_dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].style.background = "rgb(182, 182, 182)";
    }
    
    var elm = document.getElementsByClassName("slaider_img");
    for (i = 0; i < elm.length; i++) {
        elm[i].className = elm[i].className.replace(" left", "");
        elm[i].className = elm[i].className.replace(" right", "");
    }
    elm[slideIndex - 1].className += direction;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].style.background = "none";
}


// маленький слайдер(не ограниченный без прокрутки)

var ss_index = 0;
var small_slider = [['small_slider/picture_to_ss1.png','1Indonectetus facilis','1Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss2.png','2Indonectetus facilis','21Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss3.png','3Indonectetus facilis','3Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss4.png','4Indonectetus facilis','4Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss5.png','5Indonectetus facilis','5Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss6.png','6Indonectetus facilis','6Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss7.png','7Indonectetus facilis','7Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
            ];
var ss_len = small_slider.length;

// начальное положение
for (i = 0; i < 4; i++){
    document.getElementById("ss" + (i + 1) + "_img").src = small_slider[i][0];
    document.getElementById("ss" + (i + 1) + "_name").innerHTML = small_slider[i][1];
    document.getElementById("ss" + (i + 1) + "_text").innerHTML = small_slider[i][2];
    }
// изменение

function change(picture){
    for (i = 0; i < 4; i++){
    var elem = document.getElementById("ss" + (i + 1) + "_img");
    elem.src = picture[i][0];
    elem = document.getElementById("ss" + (i + 1) + "_name");
    elem.innerHTML = picture[i][1];
    elem = document.getElementById("ss" + (i + 1) + "_text");
    elem.innerHTML = picture[i][2];
    }
}

function left_ss(){
    var picture = Array(4);
        for (i = 0; i < picture.length; i++){
            picture[i] = new Array(3);
        }
    
    if (ss_index > 0 && ss_index <= ss_len - 4){
        for (i = 0; i < 4; i++)
            picture[i] = small_slider[ss_index + i - 1];
    }
    else if (ss_len - 4 < ss_index && ss_index < ss_len){
        var difference = ss_len - ss_index + 1;
        for (i = 0; i < difference; i++)
            picture[i] = small_slider[ss_index + i - 1];
        for (i = 0; i < 4 - difference; i++)
            picture[difference + i] = small_slider[i];
        }
    else{  
        picture[0] = small_slider[ss_len - 1];
        for (i = 0; i < 3; i++)
            picture[i + 1] = small_slider[i];
        }

    change(picture);
    if (ss_index - 1 >= 0) ss_index--;
    else ss_index = ss_len - 1;
    }


    function right_ss(){
        var picture = Array(4);
        for (i = 0; i < picture.length; i++){
            picture[i] = new Array(3);
        }
        if (ss_index + 4 >= ss_len){
            var difference = ss_len - ss_index - 1;
            for (i = 0; i < difference; i++)
                picture[i] = small_slider[ss_index + i + 1];
            var difference_new = 4 - difference;
            for (i = 0; i < difference_new; i++)
                picture[difference + i] = small_slider[i];
            }
        else {
            for (i = 0; i < 4; i++)
                picture[i] = small_slider[ss_index + i + 1];
            }
        change(picture);
        if (ss_index + 1 < ss_len) ss_index++;
        else ss_index = 0;
    }