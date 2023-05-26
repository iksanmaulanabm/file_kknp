// Carousel
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
        counter = 1;
    }
}, 10000);
// Carousel

// panah animation
var dropping = document.getElementById('dropping');
function rotasiPanah1(){
    if(dropping.onmouseover){
        // alert('berhasil');
        panah1.style.transform ='rotate(90deg)';
    }
}
function rotasiPanahNormal1(){
    if(dropping.onmouseout){
        // alert('berhasil');
        panah1.style.transform = 'rotate(0)';
    }
}
function rotasiPanah2(){
    if(dropping.onmouseover){
        // alert('berhasil');
        panah2.style.transform = 'rotate(90deg)';
    }
}
function rotasiPanahNormal2(){
    if(dropping.onmouseout){
        // alert('berhasil');
        panah2.style.transform = 'rotate(0)';
    }
}
function rotasiPanah3(){
    if(dropping.onmouseover){
        // alert('berhasil');
        panah3.style.transform = 'rotate(90deg)';
    }
}
function rotasiPanahNormal3(){
    if(dropping.onmouseout){
        // alert('berhasil');
        panah3.style.transform = 'rotate(0)';
    }
}
function rotasiPanah4(){
    if(dropping.onmouseover){
        // alert('berhasil');
        panah4.style.transform = 'rotate(90deg)';
    }
}
function rotasiPanahNormal4(){
    if(dropping.onmouseout){
        // alert('berhasil');
        panah4.style.transform = 'rotate(0)';
    }
}
function rotasiPanah5(){
    if(dropping.onmouseover){
        // alert('berhasil');
        panah5.style.transform = 'rotate(90deg)';
    }
}
function rotasiPanahNormal5(){
    if(dropping.onmouseout){
        // alert('berhasil');
        panah5.style.transform = 'rotate(0)';
    }
}
// panah animation

// Sticky Navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navbarsticky()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarsticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky-navbar")
  } else {
    navbar.classList.remove("sticky-navbar");
  }
}