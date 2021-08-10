/*------------------------------------------------------------------
[Main Script]

Project     : p1-Landingpage-Compraqui
Version     : 1.0
Author      : Md Ekramul Hassan Avi
Author URI  : https://www.tigertemplate.com
-------------------------------------------------------------------*/

// mobile menu call
$('#phn-menu').slicknav({
    prependTo:'#nav-menu'
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 45) {
        $('.site-navbar').addClass('position-fixed');
    } else {
        $('.site-navbar').removeClass('position-fixed');
    }
});

// testimonials carousel
$('.owl-testimonials').owlCarousel({
	margin:84,
    loop:true,
	autoplay:false,
    nav:true,
    navText: ['<img src="img/icons/arrow-left.svg">','<img src="img/icons/arrow-right.svg">'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1100:{
            items:1
        },
        1200:{
            items:1
        }
    }
});

// testimonials client
$('.owl-clients').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1100:{
            items:5
        },
        1200:{
            items:6
        }
    }
});