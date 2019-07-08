
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


//добавление узла

for (i = 4; i < ss_len; i++){
 var div = document.createElement('div');
 div.className = "block_in_small_slider ss_passive";
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

console.log("ширина браузера = " + document.body.clientWidth);	
// if (document.body.clientWidth > 1211) 
	var ind_len = 4;
// if (document.body.clientWidth <= 1211 && document.body.clientWidth > 941) 
// 	var ind_len = 3;
// if (document.body.clientWidth <= 941 && document.body.clientWidth > 657) 
// 	var ind_len = 2;
// if (document.body.clientWidth <= 657) 
// 	var ind_len = 1;


var ss_index = Array(ind_len);
for (i = 0; i < ind_len; i++)
		ss_index[i] = i;



function leaves(n){
	var vr = ss_index[n];
	pic[vr].className = pic[vr].className.replace(" ss_active_left", "");
	pic[vr].className = pic[vr].className.replace(" ss_active_right", "");
		pic[vr].className = pic[vr].className += " ss_passive";
}
function come_r(){
	pic[ss_index[0] - 1].className = pic[ss_index[0] - 1].className.replace(" ss_passive", "");
}
function cancel_activity(direction){
    if (direction.localeCompare("left") == 0){
	    for (i = 0; i < ind_len; i++)
            ss_index[i]++;
    }
    if (direction.localeCompare("right") == 0) {
        for (i = 0; i < ind_len; i++)
            ss_index[i]--;
    }
        
	for (i = 0; i < pic_len; i++){
        pic[i].className = pic[i].className.replace(" ss_active_left", "");
        pic[i].className = pic[i].className.replace(" ss_active_right", "");
    }
    
}
function cancel_the_end(direction){
	if (direction.localeCompare("left") == 0){	
		for (i = 0; i < pic_len; i++){
			pic[i].className = pic[i].className.replace(" ss_active_left_end", "");
		}		
	}
	if (direction.localeCompare("right") == 0){	
		for (i = 0; i < pic_len; i++){
			pic[i].className = pic[i].className.replace(" ss_active_right_end", "");
		}		
	}
}
function left_ss(){
    console.log(ss_index);
	if (ss_index[0] >= 0 && ss_index[ind_len - 1] > ss_index[0] && ss_index[0] < ss_len - ind_len){  
		pic[ss_index[ind_len - 1] + 1].className = pic[ss_index[ind_len - 1] + 1].className.replace(" ss_passive", "");//для последнего элемента
		
		for (i = 0; i < (ind_len + 1); i++){
			pic[ss_index[0] + i].className = pic[ss_index[0] + i].className += " ss_active_left"; //для середины
		}
	
    setTimeout(leaves, 400, 0);
    setTimeout(cancel_activity, 400, "left");	
	}
	else{
		slider.insertBefore(pic[0], null);
		for (i = 0; i < ind_len; i++)
			ss_index[i]--;
		left_ss();
	}
	
}

function right_ss(){
	if (ss_index[0] <= (pic_len - ind_len) && ss_index[0] > 0 && ss_index[ind_len - 1] > ss_index[0]){  
	
		for (i = 0; i < ind_len; i++){
			pic[ss_index[0] + i].className = pic[ss_index[0] + i].className += " ss_active_right"; 
		}
	setTimeout(come_r, 400);
	setTimeout(leaves, 400, ind_len - 1);
    setTimeout(cancel_activity, 400, "right");			
	}
	else{
		slider.insertBefore(pic[pic_len - 1], slider.firstChild);
		for (i = 0; i < ind_len; i++)
			ss_index[i]++;
		right_ss();
	}
        
}