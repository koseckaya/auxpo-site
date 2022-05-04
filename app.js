let count = ['1', '2', '3']
let art = ['Julius Caesar', 'Into the Abyss', 'Discobolous']
let price = ['221', '157', '95']

var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<p class="' + className + '">' + ('#0' + (count[index])) + '<span class="pagination-art">' + (art[index]) + '</span>' +
                '<span class="pagination-price">' + '<span>' + (price[index] + '</span>' + ' ETH') + '</span>' + "</p>";
        },
    },
});