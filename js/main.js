$(function () {
    $('input[type="text"], input[type="email"], input[type="tel"], textarea').focus(function () {
        if ($(this).val() == $(this).attr("title")) {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val($(this).attr("title"));
        }
    });

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

    if (Math.max(document.documentElement.clientWidth, window.innerWidth) <= 1024) {
        $('#featuredSliderMobile').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            fade: true
        });

        $('.footer-item-wrap .footer-item-title').click(function () {
            var $this = $(this);
            $this.closest('.footer-item-wrap').toggleClass('opened');
        });
    }


});



