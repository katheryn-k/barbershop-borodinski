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
