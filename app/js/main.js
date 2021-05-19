$(document).ready(function () {
    let $navMenu = $('.navbar');
    let $modal =$('.login');
    let $navMenuOpen = 'navbar--open';
    let $navMenuClosed = 'navbar--closed';

    $('.navbar__toggle').on('click', function (e) {
        if ($navMenu.hasClass($navMenuClosed)) {
            $navMenu.removeClass($navMenuClosed).addClass($navMenuOpen);
        } else if ($navMenu.hasClass($navMenuOpen)) {
            $navMenu.removeClass($navMenuOpen).addClass($navMenuClosed);
        }
        e.preventDefault();
    });
    $($modal).on('click', () => $navMenu.removeClass($navMenuOpen).addClass($navMenuClosed));
});

$(document).ready(function () {
    let $active = 'navbar__item--active';
    let $pageId = $('.header').attr('data-id-page');
    let $activeNavItem = $(`[data-nav-${$pageId}]`);

    $activeNavItem.addClass($active);
})


$(document).ready(function () {
    $(window).on('load resize', function () {
        if ($(window).width() > 750) {
            $('.reviews__list').slick({
                dots: true,
                dotsClass: "slick__custom-dots",
                prevArrow: '<button class="slick__btn-prev"></button>',
                nextArrow: '<button class="slick__btn-next"></button>',
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true
            });
        } else if ($(window).width() < 750) {
            $('.advantages__list:not(.slick-initialized)').slick({
                arrows: false,
                dots: true,
                dotsClass: "slick__custom-dots",
            }),
            $('.reviews__list:not(.slick-initialized)').slick({
                arrows: false,
                dots: true,
                dotsClass: "slick__custom-dots",
            });
        } else {
            $(".advantages__list.slick-initialized").slick("unslick"),
            $(".reviews__list.slick-initialized").slick("unslick");
        }
    });
});





//# sourceMappingURL=main.js.map
