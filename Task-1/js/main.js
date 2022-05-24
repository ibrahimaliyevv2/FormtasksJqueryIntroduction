var $slider = $('ul#slide-menu');
var $current = $slider.find('li.active');
var $next = $current.next();

if(!$next.length) {
    $next = $slider.find('li:first');
}

$current.removeClass('active');
$next.addClass('active');

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
