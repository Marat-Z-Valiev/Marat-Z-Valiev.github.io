//Highlight the element in the header
  $('.nav-item a').on('click', function() {
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
if($(window).width() < 991){
  $('.navbar-nav a').on('click', function() {
    $('.navbar-toggler').click();
  });
}

//Scroll to the top
$('#scrollTop').click(function(e) {
e.preventDefault();
$('html, body').animate({
  scrollTop: 0
}, 750);
return false;
});


//Display current year
$('#currentYear').text((new Date).getFullYear());
