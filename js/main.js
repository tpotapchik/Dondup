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



    $('.mobile-menu,.fade').click(function () {
        $('.fade').toggle();
        $('.navigation').toggle();
        $('.nav-link').toggleClass('mobile');
    });



    $(window).resize(function () {
        //isShowInPopup = document.body.clientWidth >= 944;
        //if(!isShowInPopup){
        //    $.fancybox.close();//закроет любой открытый в текущий момент попап
        //}
        resizeReservText();
    });



    /*script for clicks*/

    function questClick () {
        var tab_faq = $('.main-tab-item.faq');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    }
    $('.questions').click(function () {
        questClick();
    });


    $('.nav-link.faq').click(function () {
        var $this = $(this);
        if ($this.hasClass('mobile')) {
            $('.mobile-menu').click();
        }
        questClick();
    });


    function ticketClick () {
        var tab_faq = $('.main-tab-item.reserv');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    }

    $('.indexPage .nav-link.tickets').click(function () {
        var $this = $(this);
        if ($this.hasClass('mobile')) {
            $('.mobile-menu').click();
        }
        ticketClick();
    });

    $('.reserve-tickets, .indexPage .buy-tickets').click(function () {
        ticketClick();
    });
    function ticketOrderClick () {
        var tab_faq = $('.main-tab-item.info ');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    }

    $('.orderPages .nav-link.tickets').click(function () {
        var $this = $(this);
        if ($this.hasClass('mobile')) {
            $('.mobile-menu').click();
        }
        ticketOrderClick();
    });

    $('.orderPages .buy-tickets').click(function () {
        ticketOrderClick();
    });

    $('.indexPage .nav-link.to-home').click(function () {
        var $this = $(this);
        if ($this.hasClass('mobile')) {
            $('.mobile-menu').click();
        }
        var tab_faq = $('.main-tab-item.welc');
        tab_faq.click();
        var _offset = tab_faq.offset().top;

        $('body,html').animate({
            'scrollTop': _offset
        }, 400)
    });
    $('.orderPages .nav-link.to-home').click(function () {
        var $this = $(this);
        if ($this.hasClass('mobile')) {
            $('.mobile-menu').click();
        }
    });


    /*end script for clicks*/


    function resizeReservText() {
        var maxHeight = 0;
        var $item = $('.reservation-item ._description');
        $item.each(function () {
            $(this).height('auto');
            var $h = $(this).height();
            if ($h > maxHeight) {
                maxHeight = $h;
            }
        });
        $item.each(function () {
            var $h = $(this).height();
            if ($h < maxHeight) {
                $(this).height(maxHeight);
            }
        });
    }






});



