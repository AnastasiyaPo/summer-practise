
// скроллинг
(function(){
    'use strict';

    function backToTop(){
        if (window.pageYOffset > 0){
            window.scrollBy(0, -10);
            setTimeout(backToTop, 3.5);
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
    if (n < slideIndex) {
        direction = ' left'; 
        // console.log("влево");
    }
    if (n > slideIndex) {
        direction = ' right'; 
        // console.log("вправо")
    };
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

var pic = document.getElementsByClassName("block_in_small_slider");
pic_len = pic.length;

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



//зменение активности главного меню
function change_menu_activity(n){
	var main_menu = document.getElementsByClassName("part_of_mm");
	mm_len = main_menu.length;
	for (i = 0; i < mm_len; i++)
        main_menu[i].className = main_menu[i].className.replace(" active_menu", "");	
	main_menu[n].className = main_menu[n].className += " active_menu"; 
}