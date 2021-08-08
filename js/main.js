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

//Переключение page

//Мобильное меню
    var menuButton = $(".menu-button");
    menuButton.on('click', function () {
        $('.navbar-menu').toggleClass('navbar-menu--visible');
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
            name: {
                required: "Пожалуйста, укажите ваше имя",
                minlength: "Имя должно состоять не менее чем из 2 символов"
            },
            email: {
                required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
                email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
            },
            phone: {
                required: "Пожалуйста введите ваш номер телефона",
                minlength: "Телефон должен состоять не менее чем из 10 символов"
            }
        }
    });
    $('.contact-form__form').validate({
        errorClass: "invalid",
        messages: {
            email: {
                required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
                email: "Ваш адрес электронной почты должен быть в формате name@domain.com"
            }
        }
    });

    $('.modal__input--phone').mask('+7 (999) 999-99-99');

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

    new Swiper('.start-screen__slider', {
        loop: true,
        navigation: {
            nextEl: '.start-screen__next',
            prevEl: '.start-screen__back',
        },
        keyboard: {
            enabled: true,
        },
    });

});