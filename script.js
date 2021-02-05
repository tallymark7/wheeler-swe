// modified from https://gist.github.com/fanian/9b1cc5b08ac158d1d4cb
$.fn.carouselHeights = function() {

    var items = $(this), //grab all slides
        heights = [], //create empty array to store height values
        tallest; //create variable to make note of the tallest slide

    var normalizeHeights = function() {

        items.each(function() { //add heights to array
            heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
            $('.carousel-inner').css('min-height',tallest + 'px');
        });
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
        //reset vars
        tallest = 0;
        heights.length = 0;

        items.each(function() {
            $(this).css('min-height','0'); //reset min-height
        });
        normalizeHeights(); //run it again
    });

};

jQuery(function($){

    $(window).on('load', function() {
        $(".project-gallery .carousel").each(function(i) {
            $(this).carouselHeights();
        })
        //$('#carousel')
    });

});