
$(document).ready(function () {

  $('.slider').slick({
    // centerMode: true,
    centerPadding: '60px',
    slidesToShow: 6,
    prevArrow: '.custom-prev-arrow',
    nextArrow: '.custom-next-arrow',
    infinite: true,
    slidesToScroll: 1,
    draggable: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

  $('.slider-review').slick({
    // centerMode: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    draggable: true,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

});