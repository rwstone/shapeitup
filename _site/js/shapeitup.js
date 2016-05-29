$(function() {

    if ( $('.owl-carousel').length ) { 
        $('.owl-carousel').owlCarousel({
              slideSpeed : 300,
              paginationSpeed : 400,
              autoPlay: 4000,
              stopOnHover: true,
              responsive: true,
              items: 3,
              itemsCustom: [ [0, 1], [1024, 3] ],
              navigation: false
        });
    } 
     
    $hamburger = $('#hamburger');
    $nav = $('#mobile_nav_container');
    $hamburger.click(function() {
        $nav.toggleClass('shown');
        return false;
    });

});