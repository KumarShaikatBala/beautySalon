$(document).ready(function($){
	"use strict";
    // WOW Js Active
    // new WOW().init();

    // Mean menu mobile responsive menu:
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "6999.98"
    });


// Type text:
    $('.type-text').typeIt({
        // strings: ['Website', 'CV', 'Resume', 'Portfolio'],
        breakLines: false,
        autoStart: true,
        cursor: false,
        loop: true,
        speed: 200
    });


// Hero-area Slider:

    $('.slider-active').owlCarousel({
        loop:true,
        autoplay:true,
        items:1,
        smartSpeed:1000,
        autoplayTimeout:2500,
        navigation : true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // Gift Slider:

    $('.gift-active').owlCarousel({
        loop:true,
        autoplay:false,
        items:2,
        margin:30,
        smartSpeed:1000,
        autoplayTimeout:2500,
        navigation : true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })


}(jQuery));

