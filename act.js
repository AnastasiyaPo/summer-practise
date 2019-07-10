
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


var small_slider = [['small_slider/picture_to_ss1.png','1Indonectetus facilis','1Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss2.png','2Indonectetus facilis','2Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss3.png','3Indonectetus facilis','3Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss4.png','4Indonectetus facilis','4Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss5.png','5Indonectetus facilis','5Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss6.png','6Indonectetus facilis','6Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
                    ['small_slider/picture_to_ss7.png','7Indonectetus facilis','7Fat new smallness few supposing suspicion two. Way own uncommonly trave'],
            ];
var ss_len = small_slider.length;


// //добавление узла

for (i = 4; i < ss_len; i++){
 var div = document.createElement('div');
 div.className = "block_in_small_slider";
 div.id = "idss" + (i + 1);
 slider.appendChild(div);
 var idss = document.getElementById("idss" + (i + 1));
 var img = document.createElement('img');
 img.id = "ss" + (i + 1) + "_img";
 img.align = "left";
 var text = document.createElement('div');
 text.className = "text";
 text.id = "text" + (i + 1);
 text.innerHTML = "<p class = name id = ss" + (i + 1) + "_name></p><p class = information_text id = ss" + (i + 1) + "_text>";


 idss.appendChild(img);
 idss.appendChild(text);
 img.src = small_slider[i][0];
 var elm = document.getElementById("ss" + (i + 1) + "_name");
 elm.innerHTML = small_slider[i][1];
 elm = document.getElementById("ss" + (i + 1) + "_text");
 elm.innerHTML = small_slider[i][2];
}

var pic = document.getElementsByClassName("block_in_small_slider");
pic_len = pic.length;
// начальное положение
for (i = 0; i < pic_len; i++){
    document.getElementById("ss" + (i + 1) + "_img").src = small_slider[i][0];
    document.getElementById("ss" + (i + 1) + "_name").innerHTML = small_slider[i][1];
    document.getElementById("ss" + (i + 1) + "_text").innerHTML = small_slider[i][2];
    }

function time_stop_to_left(){
    slider.insertBefore(pic[0], null);
    for (i = 0; i < pic_len; i++)
        pic[i].className = pic[i].className.replace(" ss_active_left", "");
}
function time_stop_to_right(){
    slider.insertBefore(pic[pic_len - 1], slider.firstChild);
    for (i = 0; i < pic_len; i++)
        pic[i].className = pic[i].className.replace(" ss_active_right", "");
}
function left_ss(){
    setTimeout(time_stop_to_left, 600);
    for (i = 0; i < pic_len; i++){
        	pic[i].className = pic[i].className += " ss_active_left"; 
        }
}

function right_ss(){
    setTimeout(time_stop_to_right, 600);
    for (i = 0; i < pic_len; i++){
        	pic[i].className = pic[i].className += " ss_active_right"; 
        }
}