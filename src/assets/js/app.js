import * as mainFunc from "./modules/func.js";


mainFunc.isWebp();
$('.check-text-block input').change(function () {

	if ($(this).is(':checked')) {
		$(this).parents('label').addClass('active');
	} else {
		// Если чекбокс не отмечен, удаляем класс "active" у родительского элемента label
		$(this).parents('label').removeClass('active');
	}
});

$('.menu-profile a').click(function (r) {
	r.preventDefault();
	$('.menu-drop').toggle();
})

$(function () {
	$("select").not(document.getElementById("select-option")).not(document.getElementById("special")).selectize();
});
$(document).ready(function () {
	$('#select-option').selectize({
		onChange: function (value) {
			$('.curency').hide(); // Скрыть все блоки
			$('.' + value).removeClass('active').show(); // Показать только выбранный блок
			var selectedOption = value;
			if (selectedOption == 'stat2') {
				const fancybox = new Fancybox([
					{
						src: '#stat2',
						type: "inline",
					},
				]);
			}
			if (selectedOption == 'stat3') {
				const fancybox = new Fancybox([
					{
						src: '#stat3',
						type: "inline",
					},
				]);
			}
		}
	});
});

$(document).ready(function () {
	$('#special').selectize({
		onChange: function (value) {

			var selectedOption = value;
			if (selectedOption == 'doc1') {
				$('#doc1').addClass('active');
				$('#doc2').removeClass('active');
				$('#doc3').removeClass('active')
			}
			if (selectedOption == 'doc2') {
				$('#doc2').addClass('active');
				$('#doc1').removeClass('active')
				$('#doc3').removeClass('active')
			}
			if (selectedOption == 'doc3') {
				$('#doc3').addClass('active');
				$('#doc1').removeClass('active')
				$('#doc2').removeClass('active')

			}
		}
	});
});


// checkbox
$('.check input').on('change', function () {
	if ($(this).is(':checked')) {
		$(this).parents('.check').addClass('active');
	} else {
		$(this).parents('.check').removeClass('active');
	}
})

$('.radio input').on('change', function () {
	if ($(this).is(':checked')) {
		$(this).parents('.radio').siblings('.radio').removeClass('active');
		$(this).parents('.check').addClass('active');
	} else {
		$(this).parents('.check').removeClass('active');
	}
})

// ask popup
if ($(window).width() > 980) {
	$('.ask-trigger').on('mouseenter', function (r) {
		$(this).children('.ask-popup').fadeIn(100);
	})
	$('.ask-trigger').on('mouseleave', function () {
		$(this).children('.ask-popup').fadeOut(100);
	})
} else {
	$('.ask-trigger').on('click', function (r) {
		r.preventDefault();
		$(this).children('.ask-popup').fadeToggle(100);
	})
}
//mob menu
$('.search--trigger').click(function () {
	$('.search .left-menu').slideToggle(200)
})

//chips
$('.chips').click(function () {
	$('.chips').removeClass('active')
	$(this).toggleClass('active');
})

//fancybox
Fancybox.bind("[data-fancybox]", {

});

$('.login__showpass').click(function () {
	$(this).toggleClass('active');
	let input = $(this).siblings('input');
	input.attr('type', input.attr('type') === 'password' ? 'text' : 'password');
})

// range slider menu
var instance;
let fromto = $(".js-range-slider").ionRangeSlider({
	onChange: function (data) {
		$('.input-from').val(data.from);
		$('.input-to').val(data.to);
	}
});

instance = fromto.data("ionRangeSlider");

$('.input-from').on("input", function () {
	var val = $(this).prop("value");
	instance.update({
		from: val
	});
});
$('.input-to').on("input", function () {
	var val = $(this).prop("value");
	instance.update({
		to: val
	});
});

//Подбор имени
$('#name input').on('input', function () {
	let $this = $(this);
	if ($this.val().length > 2) {
		$('.name-same').show();
	} else {
		$('.name-same').hide();
	}
})

$('.name-same li').click(function () {
	let name = $(this).data('name');
	$('#name input').val(name);
	$('.name-same').hide();
})

$('.moder-statistic__show').click(function () {
	$(this).toggleClass('active');
	$(this).siblings('.moder-statistic__hide').slideToggle(200);
})

$('.radio-slice').click(function () {
	if ($(this).children('input').is(":checked")) {
		$(this).addClass('active')
	}
	else {
		$(this).removeClass('active')
	}
})

$('.item__managers__table .trigger').click(function () {

	$(this).siblings('.td-abs').toggle();
})

//slider
const swiperDates = new Swiper('.swiper-container-header', {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.header .page__right',
		prevEl: '.header .page__left',
	},
	pagination: {
		el: '.dd',
		clickable: true
	},

});
const swiperDates2 = new Swiper('.forwho__row', {
	slidesPerView: 2,
	spaceBetween: 20,
	breakpoints: {
		200: {
			slidesPerView: 1.2,

		},
		500: {
			slidesPerView: 1.6,

		},

		780: {
			slidesPerView: 2,

		}
	}
});
const swiperDates3 = new Swiper('.swiper-container-selectors', {
	slidesPerView: 'auto',
	spaceBetween: 16,
	navigation: {
		nextEl: '.paidfor .paidfor-top-next',
		prevEl: '.paidfor .paidfor-top-prev',
	},
});
if ($(window).width() > 980) {
	const swiperDates5 = new Swiper('.inner-faq__selectors', {
		slidesPerView: 4,
		spaceBetween: 16,
	});

	$('.com-ref__item').click(function (e) {
		e.preventDefault();
		$('.com-ref__item').removeClass('active');
		$('.com-ref__right .com-ref__block').removeClass('active');
		$(this).addClass('active');
		$($(this).attr('href')).addClass('active');
	})

} else {
	const swiperDates5 = new Swiper('.inner-faq__selectors', {
		slidesPerView: 'auto',
		spaceBetween: 16,
	});

	$('.com-ref__item').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active-mob')
	})
}
const swiperDates4 = new Swiper('.swiper-container-cards', {
	slidesPerView: 4,
	spaceBetween: 20,
	navigation: {
		nextEl: '.paidfor .page__right',
		prevEl: '.paidfor .page__left',
	},
	breakpoints: {
		200: {
			slidesPerView: 1.2,

		},
		500: {
			slidesPerView: 1.6,

		},

		750: {
			slidesPerView: 2,

		},
		980: {
			slidesPerView: 3,

		},
		1280: {
			slidesPerView: 4,

		}
	}
});
const swiperDates6 = new Swiper('.com-card__slider', {
	slidesPerView: 3,
	spaceBetween: 20,
	breakpoints: {
		200: {
			slidesPerView: 1.2,

		},
		500: {
			slidesPerView: 1.6,

		},

		750: {
			slidesPerView: 2,

		},
		980: {
			slidesPerView: 3,

		},
		1280: {
			slidesPerView: 3,

		}
	}
});
const swiperDates7 = new Swiper('.com-plan__row', {
	slidesPerView: 3,
	spaceBetween: 20,
	breakpoints: {
		200: {
			slidesPerView: 1.2,

		},
		500: {
			slidesPerView: 1.6,

		},

		750: {
			slidesPerView: 2,

		},
		980: {
			slidesPerView: 3.2,

		},
		1280: {
			slidesPerView: 4,

		}
	}
});

$('.header-faq__show, .header-faq__item svg').click(function () {
	$(this).parents('.header-faq__item').toggleClass('active');
})

// $('.inner-faq__sel').click(function (e) {
// 	e.preventDefault();
// 	$('.inner-faq__sel').removeClass('active');
// 	$(this).addClass('active');
// 	$('.inner-faq__inner-selects').removeClass('active');
// })
$('#select-help1').click(function () {
	$('.inner-faq__inner-selects').addClass('active');
	$(this).addClass('active');
})

$('.inner-faq__inner-selects__item').click(function (e) {
	e.preventDefault();
	$('.inner-faq__inner-selects__item').removeClass('active');
	$(this).addClass('active');
})



$('#sel-main select').selectize({

	onChange: function () {
		$('.com-calc__change').removeClass('active');
		$($('#sel-main .item').data('value')).addClass('active');
		console.log($('#sel-main .item').data('value'));
		$('.com-calc__result').hide();
		$('.btn-count').show()
	}
})

$('.btn-count').click(function () {
	$('.com-calc__result').show();
	$(this).hide()
})
$('.mobile-menu--trigger').click(function () {
	$('.mobile-fixed').slideToggle(200)
})
document.querySelectorAll('.date-input').forEach((e) => {
	new AirDatepicker(e, {
		isMobile: true,
		autoClose: true,
	});
})


const element2 = document.querySelector('.number-format');
const maskOptions2 = {
	mask: '000 000 000 000'
};
const massk2 = IMask(element2, maskOptions2);


