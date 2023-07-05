const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 30,
    direction: 'horizontal',
    loop:'true',
    infinite: true,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true,

    },
    navigation: {
    prevEl: '.js-testimonials-prev', // Selector or HTML element of the previous control
    nextEl: '.js-testimonials-next'  // Selector or HTML element of the next control
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,

    },
    breakpoints: {
        767: {
            slidesPerView: 2
        }
    },


});

