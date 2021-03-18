$(document).ready(function(){
     // add scrollspy to <body>
    $('body').scrollspy({target: ".navbar-nav", offset:50});
    //product-carousel
    $('#product-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    smartspeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   })
});
