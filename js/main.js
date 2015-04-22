$('.nav').localScroll();
var $btnCollapse = $('.btn-collapse-expand')
var $box = $('.box');
$btnCollapse.on('click', function () {
    $box.toggleClass('js-collapse');    
});;

var $intro = $('.intro');
var $ghostSection = $('.ghost');
$ghostSection.waypoint(function () {
    $ghostSection.addClass('js-ghost-active');
    }, {offset: '65%'});
$ghostSection.waypoint(function () {
    $ghostSection.addClass('js-mouth-active');
    }, {offset: '85%'});

var $btnBounce1 = $('.btn-gallery-1');
var $ghost2 = $('.ghost2');
$btnBounce1.on('click', function () {
$ghost2.addClass('js-ghost2');
    });
$ghost2.on('webkitanimationend animationend', function () {
$ghost2.removeClass('js-ghost2');    
    });
var $btnGallery1 = $('.btn-gallery-1');
var $images = $('.images');
$btnGallery1.on('click', function () {
$images.addClass('js-btn-gallery1');
$images.removeClass('js-btn-gallery2');
$images.removeClass('js-btn-gallery3');
});

var $btnBounce = $('.btn-gallery-2');
var $ghost = $('.ghost');
$btnBounce.on('click', function () {
$ghost.addClass('js-ghost');
    });
$ghost.on('webkitanimationend animationend', function () {
$ghost.removeClass('js-ghost');    
    });

var $btnGallery2 = $('.btn-gallery-2');
$btnGallery2.on('click', function () {
$images.addClass('js-btn-gallery2');
$images.removeClass('js-btn-gallery1');
$images.removeClass('js-btn-gallery3');
});

var $btnGallery3 = $('.btn-gallery-3');
$btnGallery3.on('click', function () {
$images.addClass('js-btn-gallery3');
$images.removeClass('js-btn-gallery1');
$images.removeClass('js-btn-gallery2');
});

$btn-gallery2.on('click', function () {
$images.addClass('js-btn-gallery2');
$images.removeClass('js-btn-gallery1');
$images.removeClass('js-btn-gallery3');
});

$btn-gallery1.on('click', function () {
$images.addClass('js-btn-gallery1');
$images.removeClass('js-btn-gallery2');
$images.removeClass('js-btn-gallery3');
});

$intro.waypoint(function () {
    $intro.addClass('js-intro-animate');
}, { offset: '50%'});
