let lolibtn = document.getElementById("lolibtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    lolibtn.style.display = "block";
  } else {
    lolibtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}