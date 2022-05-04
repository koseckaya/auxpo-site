let count = ['1', '2', '3']
let art = ['Julius Caesar', 'Into the Abyss', 'Discobolous']
let price = ['221', '157', '95']

var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<p class="' + className + '">' + ('#0' + (count[index])) + '<span>' + (art[index]) + '</span>' +
                '<span>' + (price[index] + ' ' + 'ETH') + '</span>' + "</p>";
        },
    },
});