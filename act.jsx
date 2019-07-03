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

