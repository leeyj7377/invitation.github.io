$(document).ready(function () {
    //gallery
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        effect: 'fade',
        loop: true,
        loopedSlides: 1
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        updateOnImagesReady: true,
        lazyLoading: true,
        on: {
            init: function () {
            },
            slideChange: function () {
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

    $('.visual').addClass('active');
    $('.intro').addClass('active');

    //motion
    $(window).scroll(function (e) {
        var nTop = $(document).scrollTop();

        if (nTop > 400) {
            $('.visual').removeClass('active');
        } else {
            $('.visual').addClass('active');
        }
    });
});