(function($)
{
	"use strict";
    $(document).ready(function () {

        // mouse parallax on mouse over
        var movementStrength = 25;
        var height = movementStrength / $(window).height();
        var width = movementStrength / $(window).width();
        $(".parallax-mouse.gosign-header-section").mousemove(function (e) {
            var pageX = e.pageX - ($(window).width() / 2);
            var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -1 - 25;
            var newvalueY = height * pageY * -1 - 50;
            $('.parallax-mouse.gosign-header-section').css("background-position", newvalueX+"px     "+newvalueY+"px");
        });

        /* jarallax plugin trigger */
        $('.jarallax.gosign-header-section').jarallax({
            speed: 0.2
        });

	});

})(jQuery);
