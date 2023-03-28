$(function(){
    // slick slider banner ============
    $('.banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        prevArrow: '<i class="fal fa-chevron-square-left left_arrow"></i>',
        nextArrow: '<i class="fal fa-chevron-square-right right_arrow"></i>',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          },
        ]
    });


    // counter us js ==================
    $('.counter').counterUp({
    delay: 50,
    time: 2000
    });


    // sticky header =================
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if (scrolling > 200){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    })

    // about part add class & remove class ============
    $('#btn_2').click(function(){
        $('#ap_2').slideDown();
        $('#ap_1').slideUp();
        $('#ap_3').slideUp();
        $('#ap_4').slideUp();
        $('#bar_2').css('background', '#ffca36');
        $('#bar_1').css('background', 'transparent');
        $('#bar_3').css('background', 'transparent');
        $('#bar_4').css('background', 'transparent');
    })
    $('#btn_1').click(function(){
        $('#ap_1').slideDown();
        $('#ap_2').slideUp();
        $('#ap_3').slideUp();
        $('#ap_4').slideUp();
        $('#bar_1').css('background', '#ffca36');
        $('#bar_2').css('background', 'transparent');
        $('#bar_3').css('background', 'transparent');
        $('#bar_4').css('background', 'transparent');
    })
    $('#btn_3').click(function(){
        $('#ap_3').slideDown();
        $('#ap_1').slideUp();
        $('#ap_2').slideUp();
        $('#ap_4').slideUp();
        $('#bar_3').css('background', '#ffca36');
        $('#bar_1').css('background', 'transparent');
        $('#bar_2').css('background', 'transparent');
        $('#bar_4').css('background', 'transparent');
    })
    $('#btn_4').click(function(){
        $('#ap_4').slideDown();
        $('#ap_1').slideUp();
        $('#ap_3').slideUp();
        $('#ap_2').slideUp();
        $('#bar_4').css('background', '#ffca36');
        $('#bar_1').css('background', 'transparent');
        $('#bar_3').css('background', 'transparent');
        $('#bar_2').css('background', 'transparent');
    })

    // slick slider blog ============
    $('.blog_part').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 3000,
        centerPadding:"0",
        arrows: true,
        prevArrow: '<i class="fal fa-chevron-square-left left_arrow"></i>',
        nextArrow: '<i class="fal fa-chevron-square-right right_arrow"></i>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
          ]
    });

    // slick slider testimonial ============
    $('.tst_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        prevArrow: '<i class="fal fa-chevron-square-left left_arrow"></i>',
        nextArrow: '<i class="fal fa-chevron-square-right right_arrow"></i>',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              arrows: false,
            }
          },
        ]
    });

    // slick slider client ============
    $('.client_part').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 3000,
        centerPadding:"0",
        arrows: true,
        prevArrow: '<i class="fal fa-chevron-square-left left_arrow"></i>',
        nextArrow: '<i class="fal fa-chevron-square-right right_arrow"></i>',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
            }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              }
            },
          ]
    });

})