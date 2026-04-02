// Smooth scrolling functionality
$('a[href^="#"]').on('click', function(event) {
  event.preventDefault();
  const target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
});

// Animation for ribbon flowers
$(document).ready(function() {
  $('.ribbon-flower').hide().fadeIn(1000);
});

// Additional animation for when flowers are hovered
$('.ribbon-flower').hover( 
  function() { 
      $(this).animate({
          opacity: 0.7,
          bottom: '+=10px'
      }, 200);
  }, function() {
      $(this).animate({
          opacity: 1,
          bottom: '-=10px'
      }, 200);
  }
);