$( document ).ready(function() {
	
	$( ".info_btn" ).on( "click", function() {
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
			$(this).parent().next().next().slideUp();
		} else {
			$(this).addClass("active");
			$(this).parent().next().next().slideDown();
		}
	});


	//вечная прокрутка под шапкой Начало
	const $container = $('.slideopt_sec_items');
    if ($container.length) {
		const speed = 0.05; // скорость в пикселях за миллисекунду

		function animateItems() {
			const $firstItem = $container.find('.slideopt_sec_item:first');
			const firstItemWidth = $firstItem.outerWidth(true);

			$firstItem.animate({marginLeft: -firstItemWidth}, firstItemWidth / speed, 'linear', function() {
				$firstItem.appendTo($container).css({marginLeft: 0});
				animateItems(); // Рекурсивный вызов для бесконечной анимации
			});
		}
		
		animateItems(); // Запуск анимации
	}
	//вечная прокрутка под шапкой Конец
	
	//мобильное меню
	$( ".head_bottom_menu_mobile_btn" ).on( "click", function() {
		if ( $(this).hasClass("active") ) {
			$(this).removeClass("active");
			$(this).next().slideUp();
		} else {
			$(this).addClass("active");
			$(this).next().slideDown();
		}
	});
	
	//фиксированная шапка
	var headBottomPos = $('.head_bottom').offset().top;
    $(window).scroll(function() {
        if ($(window).scrollTop() >= headBottomPos) {
            $('.head_bottom_outer').addClass('fixed');
        } else {
            $('.head_bottom_outer').removeClass('fixed');
        }
    });
	
	//спускание к форме заявки
	function scrollToContactForm() {
        var $contactForm = $('.wp-block-contact-form-7-contact-form-selector');
        if($contactForm.length) {
            $('html, body').animate({
                scrollTop: $contactForm.offset().top - 100
            }, 500);
        }
    }
    if(window.location.hash === '#contact-form') {
        scrollToContactForm();
    }
   // $('.form_btn').click(function(e) {
        //if($('body').hasClass('home')) {
			//e.preventDefault();
			//scrollToContactForm();
		//}
    //});

});