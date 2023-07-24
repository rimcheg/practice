document.querySelector('.popup_menu').onclick = function () {
    document.querySelector('.popup_header').classList.toggle('active_popup_menu');
    document.querySelector('.content').classList.toggle('blure_all');
    document.querySelector('.header_content').classList.toggle('blure_all');
    document.querySelector('.bg_img').classList.toggle('blure_all');
    document.querySelector('.footer').classList.toggle('blure_all');
}

document.querySelector('.to_right').onclick = function () {
    document.querySelector('.absolute').classList.add('right');
}
document.querySelector('.to_left').onclick = function () {
    document.querySelector('.absolute').classList.remove('right');
}