function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
$(document).ready(function () {
  $(".test").owlCarousel({
    items: 1,
    margin: 40,
    loop: true,
    nav: false,
    autoplay: Boolean,
    autoplayTimeout: 1400,
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 40,
    loop: true,
    nav: false,
    dots: false,
    autoplay: Boolean,
    autoplayTimeout: 1400,
  });
});
