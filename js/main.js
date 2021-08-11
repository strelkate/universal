//Перееключение табов
$(document).ready(function () {
    var tabsItem = $(".main-screen__tab");
    var contentItem = $(".main-screen__left");

    tabsItem.on("click", function (event) {
        var activeContent = $(this).attr("data-target");
        tabsItem.removeClass('main-screen__tab-active');
        contentItem.removeClass('main-screen__left-active');
        $(activeContent).toggleClass('main-screen__left-active');
        $(this).toggleClass('main-screen__tab-active');
    });

//Загрузка новых комментариев

    $(".comments__loading").on("click", function (event) {
        $(".comments__item-invisible").toggleClass('comments__item-invisible-active');
        $(".comments__line-invisible").toggleClass('comments__line-invisible-active');
    });

//Мобильное меню
    var menuButton = $(".menu-button");
    menuButton.on('click', function () {
        $('.navbar-menu').toggleClass('navbar-menu--visible');
    });

    var menuButton2 = $(".menu-button-2");
    menuButton2.on('click', function () {
        $('.navbar-menu-2').toggleClass('navbar-menu-2--visible');
    });

//Скачивание файла
    $('.grid__bottom-download').on('click', function () {
        var link = document.createElement('a');
        link.setAttribute('href', 'img/smiley-face.jpeg');
        link.setAttribute('download', 'smiley-face.jpeg');
        link.click();
        return false;
    });

//Смена цвета у bookmark
    $(".list__icon-bookmark").on('click', function (e) {
        if (e.currentTarget.style.fill !== "rgb(255, 79, 82)") {
            e.currentTarget.style.fill = "#FF4F52";
        } else {
            e.currentTarget.style.fill = "#BCBFC2";
        }
    });

    $(".start-screen__icon-bookmark").on('click', function (e) {
        if (e.currentTarget.style.fill !== "rgb(255, 79, 82)") {
            e.currentTarget.style.fill = "#FF4F52";
        } else {
            e.currentTarget.style.fill = "#BCBFC2";
        }
    })

//Модальное окно
    var modalButton = $("[data-toggle=modal]");
    modalButton.on("click", openModal);
    var closeModalButton = $(".modal__close");
    closeModalButton.on("click", closeModalClick);
    var modalOverlay = $(".modal__overlay");
    modalOverlay.on("click", closeModalClick);

    function openModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay--visible");
        modalDialog.addClass("modal__dialog--visible");
        document.body.style.overflowY = 'hidden'
    }

    function closeModalClick(event) {
        event.preventDefault();
        closeModal();
    }

    function closeModal() {
        var modalOverlay = $(".modal__overlay");
        var modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        document.body.style.overflowY = ''
    }

    $(document).keyup(function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            closeModal();
        }
    });


// Валидация форм
    $('.modal__form').validate({
        errorClass: "invalid",
        messages: {
            modal__select: {
                required: "Пожалуйста, выберите тему"
            },
            email__modal: {
                required: "Нам нужен ваш Email, чтобы с вами связаться",
                email: "Email должен быть в формате name@domain.com"
            },
            message: {
                required: "Пожалуйста, заполните данное поле",
            },
            horns:{
                required: "Нам нужно Ваше согласие на обработку данных"
            }
        },
    });

    $('.contact-form__form').validate({
        errorClass: "invalid",
        messages: {
            email: {
                required: "Нам нужен ваш Email, чтобы с вами связаться",
                email: "Email должен быть в формате name@domain.com"
            }
        }
    });

    $('.comments-textarea__form').validate({
        errorClass: "invalid",
        messages: {
            comment: {
                required: "Пожалуйста, напишите свой комментарий",
                minlength: "Минимальное количество символов 100"
            }
        }
    });

    // AOS.init();



//Слайдер
    new Swiper('.table-slider', {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets',

        },
    });

    new Swiper('.photo-slider', {
        loop: true,
        navigation: {
            nextEl: '.photo-slider__button-next',
            prevEl: '.photo-slider__button-prev',
        },
        keyboard: {
            enabled: true,
        },
    });

});