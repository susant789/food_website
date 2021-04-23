$(document).ready(function(){
    $('.food-slider').slick({
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow :".pre-btn",
        nextArrow :".next-btn",
        autoplay:true
    });
});