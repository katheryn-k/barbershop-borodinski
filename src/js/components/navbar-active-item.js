$(document).ready(function () {
    let $active = 'navbar__item--active';
    let $pageId = $('.header').attr('data-id-page');
    let $activeNavItem = $(`[data-nav-${$pageId}]`);

    $activeNavItem.addClass($active);
})

