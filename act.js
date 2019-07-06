
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
function currentSlide(n){
    var direction = 'none';
    console.log("index = " + slideIndex + " n = " + n);
    if (n < slideIndex) {direction = ' left'; 
    console.log("влево");}
    if (n > slideIndex) {direction = ' right'; console.log("вправо")};
    slideIndex = n;
    showSlides(slideIndex, direction);
}

function showSlides(n, direction){
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
                    ['small_slider/picture_to_ss2.png','2Indonectetus facilis','2Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss3.png','3Indonectetus facilis','3Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss4.png','4Indonectetus facilis','4Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss5.png','5Indonectetus facilis','5Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss6.png','6Indonectetus facilis','6Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss7.png','7Indonectetus facilis','7Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
            ];
var ss_len = small_slider.length;
var pic = document.getElementsByClassName("block_in_small_slider");
ss_pic = pic.length;

// начальное положение
for (i = 0; i < ss_pic; i++){
    document.getElementById("ss" + (i + 1) + "_img").src = small_slider[i][0];
    document.getElementById("ss" + (i + 1) + "_name").innerHTML = small_slider[i][1];
    document.getElementById("ss" + (i + 1) + "_text").innerHTML = small_slider[i][2];
    }
// изменение


//добавление узла на примере 5элемента 
// var div = document.createElement('div');
// div.className = "block_in_small_slider";
// div.id = "idss";
// var img = document.createElement('img');
// img.id = "ss5_img";
// img.align = "left";
// var text = document.createElement('div');
// text.className = "text";
// text.id = "text";
// text.innerHTML = "<p class = name id = ss5_name></p><p class = information_text id = ss5_text>";

// slider.appendChild(div);;
// idss.appendChild(img);
// idss.appendChild(text);
// img.src = small_slider[4][0];
// var elm = document.getElementById("ss5_name");
// elm.innerHTML = small_slider[4][1];
// elm = document.getElementById("ss5_text");
// elm.innerHTML = small_slider[4][2];



function change(picture){
    for (i = 0; i < ss_pic; i++){
    var elem = document.getElementById("ss" + (i + 1) + "_img");
    elem.src = picture[i][0];
    elem = document.getElementById("ss" + (i + 1) + "_name");
    elem.innerHTML = picture[i][1];
    elem = document.getElementById("ss" + (i + 1) + "_text");
    elem.innerHTML = picture[i][2];
    }
}

function left_ss(){
    var picture = Array(ss_pic);
        for (i = 0; i < picture.length; i++){
            picture[i] = new Array(3);
        }
    
    if (ss_index > 0 && ss_index <= ss_len - ss_pic){
        for (i = 0; i < ss_pic; i++)
            picture[i] = small_slider[ss_index + i - 1];
    }
    else if (ss_len - ss_pic < ss_index && ss_index < ss_len){
        var difference = ss_len - ss_index + 1;
        for (i = 0; i < difference; i++)
            picture[i] = small_slider[ss_index + i - 1];
        for (i = 0; i < ss_pic - difference; i++)
            picture[difference + i] = small_slider[i];
        }
    else{  
        picture[0] = small_slider[ss_len - 1];
        for (i = 0; i < ss_pic - 1; i++)
            picture[i + 1] = small_slider[i];
        }

    change(picture);
    if (ss_index - 1 >= 0) ss_index--;
    else ss_index = ss_len - 1;
    }


    function right_ss(){
        var picture = Array(ss_pic);
        for (i = 0; i < picture.length; i++){
            picture[i] = new Array(3);
        }
        if (ss_index + ss_pic >= ss_len){
            var difference = ss_len - ss_index - 1;
            for (i = 0; i < difference; i++)
                picture[i] = small_slider[ss_index + i + 1];
            var difference_new = ss_pic - difference;
            for (i = 0; i < difference_new; i++)
                picture[difference + i] = small_slider[i];
            }
        else {
            for (i = 0; i < ss_pic; i++)
                picture[i] = small_slider[ss_index + i + 1];
            }
        change(picture);
        if (ss_index + 1 < ss_len) ss_index++;
        else ss_index = 0;
    }



    

