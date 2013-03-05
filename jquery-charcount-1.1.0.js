(function($) {

    var CharCount = {
        default: {
            limit: 140,
            counter: '#counter'
        },

        init: function($ele, options) {
            $ele.charLimit = options.limit;
            if ($(options.counter).size()) {
                $ele.$counter = $(options.counter);
            } else {
                var id = 'charcount-' + Math.ceil(Math.random() * 1000);
                $ele.after('<p id="' + id + '"></p>');
                $ele.$counter = $('p#' + id);
            }
            CharCount.update($ele);
            $ele.keyup(function() { CharCount.update($ele); });
        },

        update: function($ele) {
            var curCount = $ele.val().length;
            if (curCount >= $ele.charLimit) {
                $ele.val($ele.val().substring(0, $ele.charLimit));
            }
            $ele.$counter.html($ele.val().length + ' / ' + $ele.charLimit);
        }

    };

    $.fn.charCount = function(options) {
        CharCount.init(this, $.extend(true, {}, CharCount.default, options));
    }

})(jQuery);