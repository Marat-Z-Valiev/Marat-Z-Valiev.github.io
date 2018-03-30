//Highlight the element in the header
  $('.nav-item a').on('click', function() {
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
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

//Highlight menu items on scroll
$(function() {
  const aboutSection = $('#about').offset().top - 60;
  const portfolioSection = $('#portfolio').offset().top - 60;
  const contactSection = $('#contact').offset().top - 575;
    
  $(document).on('scroll', function() {
  const scrollTop = $(document).scrollTop();
  let activeElement;
  if(scrollTop < aboutSection){
    activeElement = $('.navbar-nav>li:nth-child(1)');
  }
  else if(scrollTop < portfolioSection){
    activeElement = $('.navbar-nav>li:nth-child(2)');
  }
  else if(scrollTop < contactSection){
    activeElement = $('.navbar-nav>li:nth-child(3)');
  }
  else{
    activeElement = $('.navbar-nav>li:nth-child(4)');
  }
  activeElement.addClass('active');
  $('.navbar-nav > li').not(activeElement).removeClass('active');
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