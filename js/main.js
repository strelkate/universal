$(document).ready(function () {
    var tabsItem = $(".main-screen__tab");
    var contentItem = $(".main-screen__left");
    var contentItem0 = $(".main-screen__left-0");

    tabsItem.on("click", function (event) {
        var activeContent = $(this).attr("data-target");
        tabsItem.removeClass('main-screen__tab-active');
        contentItem.removeClass('main-screen__left-active');
        // contentItem0.removeClass('main-screen__left-0');
        $(activeContent).toggleClass('main-screen__left-active');
        $(this).toggleClass('main-screen__tab-active');
    });
});
var menuButton = $(".menu-button");
menuButton.on('click', function () {
    $('.navbar-menu').toggleClass('navbar-menu--visible');
});
