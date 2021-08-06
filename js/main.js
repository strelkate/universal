//Перееключение табов
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

//Мобильное меню
var menuButton = $(".menu-button");
menuButton.on('click', function () {
    $('.navbar-menu').toggleClass('navbar-menu--visible');
});

//Скачивание файла
$('.grid__bottom-download').on('click', function(){
    var link = document.createElement('a');
    link.setAttribute('href', 'img/smiley-face.jpeg');
    link.setAttribute('download', 'smiley-face.jpeg');
    link.click();
    return false;
});

//Смена цвета у bookmark
$(".list__icon-bookmark").on('click', function (e) {
    if( e.currentTarget.style.fill !== "rgb(255, 79, 82)") {
        e.currentTarget.style.fill = "#FF4F52";
    } else{
        e.currentTarget.style.fill = "#BCBFC2";
    }
});