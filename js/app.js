$(document).foundation();


var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() {

    divs.eq(i).fadeIn(400)
              .delay(2000)
              .fadeOut(400, cycle);

    i = ++i % divs.length;

})();


$('a[href^="#"]').on('click', function(event) {
    var target = $(this.href);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
