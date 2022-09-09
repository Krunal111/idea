AOS.init({
	duration: 1200
});

// Dark mode js

jQuery(document).on('click', '.mode__btn', function () {
	if (jQuery(this).hasClass('day')) {
		jQuery(this).removeClass('day').addClass('night');
		jQuery('body').addClass('dark__mode');
	} else if (jQuery(this).hasClass('night')) {
		jQuery(this).removeClass('night').addClass('day');
		jQuery('body').removeClass('dark__mode');
	}
});

// SVG file to SVG code convert JS Start
function img2svg() {
    jQuery('.in__svg').each(function(i, e) {

        var $img = jQuery(e);

        var imgID = $img.attr('id');

        var imgClass = $img.attr('class');

        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
}
img2svg();

// SVG file to SVG code convert JS End

// Mobile Menu JS Start
$(".mobile__menu").click(function(){
    $(".mobile__menu, .header__menu").toggleClass("open");
});
// Mobile Menu JS End

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("fixed__header");
    } else {
        $("header").removeClass("fixed__header");
    }
});

// Testimonial Slider
var swiper = new Swiper(".testimonial-tumb", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".testimonial-single", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
//Testimonial Slider

// Clients Slider
var swiper = new Swiper(".clients__slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  breakpoints: {
    330: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.5
    },
    1024: {
      slidesPerView: 4.5
    },
  },
});
// Clients Slider

// Marquee Slider
var swiper = new Swiper(".marquee__content", {
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    330: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 6
    },
    1024: {
      slidesPerView: 10
    },
  },
});
// Marquee Slider

// Stats Counter
$('.counter').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 25000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
// Stats Counter