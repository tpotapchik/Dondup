$(function () {
    $('.component-select').chosen({
        disable_search: true,
        inherit_select_classes: true,
        width: "35px"
    });

    $('#subslider1,#subslider2,#subslider3,#subslider4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true
    });

    $('#mainSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true
    });

    $('.additional-block-item .close-icon').click(function () {
        var $this = $(this);
        $this.closest('.header-top').slideUp(400);
    });

    $('.arrow-block').click(function () {

        $('html, body').animate({
            scrollTop: $(".scroll-top-js").offset().top
        }, 2000);
    });

    function initSlider() {
        if (Math.max(document.documentElement.clientWidth, window.innerWidth) <= 1024) {
            $('#featuredSliderMobile').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                fade: true
            });
        }
    }
    initSlider();

    function initToggleItemsFootet() {
        $('.footer-item-wrap .footer-item-title').click(function () {
            var $this = $(this);
            $this.closest('.footer-item-wrap').toggleClass('opened');
        });
    }


    if (Math.max(document.documentElement.clientWidth, window.innerWidth) <= 1024) {
        initToggleItemsFootet();
    }

    $(window).resize(function () {
        $('#featuredSliderMobile').unslick();
        initSlider();
        initToggleItemsFootet();
    });

});



