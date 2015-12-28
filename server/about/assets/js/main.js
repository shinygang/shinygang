/*
	Tessellate by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Scrolly links.
			$('.scrolly').scrolly();

		// Prioritize "important" elements on narrow.
			skel.on('+narrow -narrow', function() {
				$.prioritize(
					'.important\\28 narrow\\29',
					skel.breakpoint('narrow').active
				);
			});

		//处理菜单导航
		var toggle = $('#ss_toggle');
		var menu = $('#ss_menu');
		var rot;
		$('#ss_toggle').on('click', function (ev) {
			rot = parseInt($(this).data('rot')) - 180;
			menu.css('transform', 'rotate(' + rot + 'deg)');
			menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
			if (rot / 180 % 2 == 0) {
				toggle.parent().addClass('ss_active');
				toggle.addClass('close');
			} else {
				toggle.parent().removeClass('ss_active');
				toggle.removeClass('close');
			}
			$(this).data('rot', rot);
		});
		menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
			if (rot / 180 % 2 == 0) {
				$('#ss_menu div i').addClass('ss_animate');
			} else {
				$('#ss_menu div i').removeClass('ss_animate');
			}
		});

	});

})(jQuery);