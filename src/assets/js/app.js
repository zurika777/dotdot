$(function() {

    /*Smooth scrool*/

    $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass("active");
        $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);

});

    /*header fixed*/
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH ) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    }


/*
    Menu nav toggle
*/
    $("#nav__toggle").on("click" , function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


    /*
        collapse
    */
    $("[data-collapse]").on("click", function(event) {
         event.preventDefault();

        var $this = $(this),
        blockId = $this.data('collapse');

        $(this).toggleClass("accordion__item--active");



        console.log(blockId)
        });



    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


});
