/**
 * jQuery.jessie.homedir.js
 * author: jessie-zly
 * 2017/11/11
 * description:
 */

(function ($) {
    $(function () {
        $('li').on('mouseenter', 'mouseleave', function (event) {
            //
            const direction = $.slideDirection($(this), {x: event.pageX, y: event.pageY});
            //
            if (event.type == 'mouseenter') {
                //
                switch (direction) {
                    case 0:
                        startPosition = {
                            left: 0,
                            top: -$(this).find('a').outerHeight()
                        }
                        break;
                    case 1:
                        startPosition = {
                            left: $(this).find('a').outerWidth(),
                            top: 0
                        }
                        break;
                    case 2:
                        startPosition = {
                            left: 0,
                            top: $(this).find('a').outerHeight()
                        }
                        break;
                    case 3:
                        startPosition = {
                            left: -$(this).find('a').outerWidth(),
                            top: 0
                        }
                        break;
                }
                //
                $(this).find('a').css(startPosition).animate({left: 0, top: 0});
            } else {
                //
                switch (direction) {
                    case 0:
                        endPosition = {
                            left: 0,
                            top: -$(this).find('a').outerHeight()
                        }
                        break;
                    case 1:
                        endPosition = {
                            left: $(this).find('a').outerWidth(),
                            top: 0
                        }
                        break;
                    case 2:
                        endPosition = {
                            left: 0,
                            top: $(this).find('a').outerHeight()
                        }
                        break;
                    case 3:
                        endPosition = {
                            left: -$(this).find('a').outerWidth(),
                            top: 0
                        }
                        break;
                }
                //
                $(this).find('a').animate(endPosition);
            }
        });
    })
})(jQuery)
