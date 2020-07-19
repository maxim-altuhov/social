function countAnimated() {

	function countStart() {
		$('.standarts__projects-number').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	}


	$(function () {
		var startCount = $('#count');
		var CountStatus = true;
		$(window).scroll(function () {
			var scrollEvent = ($(window).scrollTop() > (startCount.position().top - $(window).height()));
			if (scrollEvent && CountStatus) {
				CountStatus = false;
				if (window.matchMedia("(min-width: 995px)").matches) {
					countStart();
				}
			}
		});
	});

}

export default countAnimated;