$(document).ready(function(){
    let button = $('.item__btn-wrap').children('.item__btn');
    let box = $('.achievements__content');
    let itemTitle = $('.item__title');
    let bgOne = $('.achievements-wrap').height();
    let bgTwo = $('.reviews-wrap').height();

    box.slideUp();
    
    if($(window).width() > 992) {
      if (bgOne > bgTwo) {
        $('.reviews-wrap').height(bgTwo);
        $('.achievements-wrap').height(bgTwo);
      } else {
        $('.reviews-wrap').height(bgOne);
        $('.achievements-wrap').height(bgOne);
      }
    }

    itemTitle.click(function(){
      if($(this).hasClass('item__title-active')) {
        $(this).siblings('.item__btn-wrap').children('.item__btn').removeClass('item__btn-active');
        $(this).removeClass('item__title-active');
        $(this).parent('.achievements__item-top').siblings('.achievements__content').slideUp();
      } else {
        button.removeClass('item__btn-active');
        itemTitle.removeClass('item__title-active');
        box.slideUp();
        $(this).siblings('.item__btn-wrap').children('.item__btn').toggleClass('item__btn-active');
        $(this).toggleClass('item__title-active');
        $(this).parent('.achievements__item-top').siblings('.achievements__content').not($(this).next()).slideToggle();
      }
    })

    if($(window).width() < 769) {
      $('.main-content__slider').slick({
          infinite: false,
          dots: true,
          nextArrow: '<button class="slider-next__btn slider__btn"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.3 0.299999C-0.0999998 0.699999 -0.0999998 1.3 0.3 1.7L8.1 9.5L0.3 17.3C-0.1 17.7 -0.1 18.3 0.3 18.7C0.7 19.1 1.3 19.1 1.7 18.7L10.2 10.2C10.6 9.8 10.6 9.2 10.2 8.8L1.7 0.299999C1.3 -0.1 0.7 -0.1 0.3 0.299999Z" fill="#A6ABBD"/></svg></button>',
          prevArrow: '<button class="slider-prev__btn slider__btn"><svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2 18.7C10.6 18.3 10.6 17.7 10.2 17.3L2.4 9.5L10.2 1.7C10.6 1.3 10.6 0.7 10.2 0.3C9.8 -0.1 9.2 -0.1 8.8 0.3L0.3 8.8C-0.0999998 9.2 -0.0999999 9.8 0.3 10.2L8.8 18.7C9.2 19.1 9.8 19.1 10.2 18.7Z" fill="#A6ABBD"/></svg></button>',
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
      });
    }
  });