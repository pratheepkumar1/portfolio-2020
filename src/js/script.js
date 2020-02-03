// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").classList.add("header-title-fixed");
    document.getElementById("navbar").classList.add("blur-background");
    document.getElementById("navbar").classList.add("header-fixed");
  } else {
    document.getElementById("header").classList.remove("header-title-fixed");
    document.getElementById("navbar").classList.remove("header-fixed");
    document.getElementById("navbar").classList.remove("blur-background");
  }
}
