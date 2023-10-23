$(document).ready(function(){

  // banner sub-menu
  $('.menu-l .menu-box .menu').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');
    $(`#${result}`).addClass('active');
    $('.sub-menu-box').addClass('active');
    });

    $('.sub-menu').mouseleave(function(){
      $(this).removeClass('active');
      $('.sub-menu-box').removeClass('active');
    });

    // // sub-category
    $('.category').mouseenter(function(){
      $(this).children('.sub-category').slideDown();
    });
    $('.category').mouseleave(function(){
      $(this).children('.sub-category').slideUp();
    });
  
    let ww = $(window).width();
    // search
    function search(){
      $('.search-icon').mouseenter(function(){
      $('.search-box').addClass('on');
      $('.header-area').addClass('on');
    });
    $('.search-box').mouseleave(function(){
      $('.header-area').removeClass('on');
      $('.search-box').removeClass('on');
    });
    }
    if(ww >= 660){
      search();
    }

    // top-btn
    $(window).scroll(function(){
      if($(window).scrollTop() >= 100){
        $('.top-btn-box').fadeIn();
        $('.menu-r').removeClass('active');

      }else{
        $('.top-btn-box').fadeOut();
      }
    });
    $('.top-btn-box').click(function(){
      $('html, body').animate({
        scrollTop: 0
      },500);
    });
    
    // sec-1 swiper
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        pagination: {
          el: ".swiper-pagination",
        },
      });

      // sec-1 bookmark on/off
      $('.sec-1 .save').click(function(){
        $(this).toggleClass('on');
      });

      // sec-3 interior data-alt
      $('.sec-3 .btn-box .btn').click(function(){
        let result = $(this).attr('data-alt');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.interior-tab interior').removeClass('active');
        $(`#${result}`).addClass('active');
        $(`#${result}`).siblings().removeClass('active');
      });

      // sec-4 interior service
      $('.sec-4 .service li').click(function(){
        let result = $(this).attr('data-alt');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(`#${result}`).addClass('active');
        $(`#${result}`).siblings().removeClass('active');
      });
      
      function slide(){
        var swiper = new Swiper(".fifthSwiper", {
          slidesPerView: 'auto',
          spaceBetween: 20,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 1500,
            disableOninteraction: false,
          },
        });
        $('.swiper-slide').hover(function(){
          swiper.autoplay.stop();
        }, function(){
          swiper.autoplay.start();
        });
      }


      if(ww > 1200){
        slide();
      };

      $('.hamburger').click(function(){
        $('.menu-r').toggleClass('active');
      });
}); //end
