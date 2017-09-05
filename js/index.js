//Select element in the header
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

//Scroll to selected section
$(function() {
  $('.nav-scroll a').click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});

//Hide the menu after click
$('.nav a').on('click', function(){
    $('.btn-navbar').click(); 
    $('.navbar-toggle').click();
});