//Select element in the header
$(".nav-item a").on("click", function() {
  $(".nav-item").removeClass("active");
  $(this).parent().addClass("active");
});

//Scroll to selected section
$(function() {
  $('.nav-scroll a').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
    }, 750);
  });
});

//Hide the menu after click
$('.nav a').on('click', function() {
  $('.btn-navbar').click();
  $('.navbar-toggle').click();
});

//Scroll to the top
$("#scrollTop").click(function(e) {
e.preventDefault();
$('html, body').animate({
  scrollTop: 0
}, 750);
return false;
});
