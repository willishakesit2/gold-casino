$(document).ready(function(){
    $(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      
        if ($(window).width() < 1280) {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '145px');
            } else {
                $('.new-logo').css('width', '160px');
            }
        } else {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '210px');
            } else {
                $('.new-logo').css('width', '240');
            }
        }
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    })
    $('.toggle-item').click(function(){
        let elData = $(this).data('val')
        
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

        if(elData === 'casino') {
            $('.casino-cards').removeClass('hide')
            $('.slot-cardss').addClass('hide')
        }else{
            $('.slot-cardss').removeClass('hide')
            $('.casino-cards').addClass('hide')
        }
    })
    $('li.user, li.menu').click(function(){
        let elData = $(this).data('val')
        let hidden = $(this).is(":hidden")

        console.log(hidden)
        if(elData === 'user'){
            // $('.menu-list .menu-item-m').removeClass('active')
            $('.menu-list .user-info-m').addClass('active')
            $('.menu-item-m').slideUp()
            $('.user-info-m').slideToggle()
        }else{
            // $('.menu-list .user-info-m').removeClass('active')
            // $('.menu-list .menu-item-m').addClass('active')
            $('.user-info-m').slideUp()
            $('.menu-item-m').slideToggle()
        }
        // $('.user-info-m').slideToggle()
    })
})