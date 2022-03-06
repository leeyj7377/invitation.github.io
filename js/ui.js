$(document).ready(function () {
    //gallery
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        // navigation: {
        //     nextEl: '.swiper-next',
        //     prevEl: '.swiper-prev',
        // },
        loop: true,
        loopedSlides: 3
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        // touchRatio: 0.2,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 3,
        updateOnImagesReady:true,
        lazyLoading:true,
        lazyLoadingInPrevNext:true,
        lazyLoadingOnTransitionStart:true,
        on: {
            init: function () {
            },
            slideChange: function () {
                $('.gallery-thumbs .swiper-wrapper').addClass('reset')
            },
        },
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    //copy
    $('.item .copy-btn').on('click', function () {
        var text = "";
        text = $(this).parent().parent().find('.copy-text').text();
        $('#copyTarget').val(text);
        $('#copyTarget').select();

        document.execCommand('copy');

        $('#msg_copy').addClass('active');
        setTimeout(function () {
            $('#msg_copy').removeClass('active');
        }, 1500);

        return false;
    });
});