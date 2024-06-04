document.addEventListener('DOMContentLoaded', function() {
    const close = document.querySelector('.closebaton'); // мненюшка с керстом или 3 богатыря
    const nav = document.querySelector('.navbar'); // менюшка мейн
    const openSVG = document.querySelector('.burger'); // toggle(open)
    const closeSVG = document.querySelector('.closeSVG'); // toggle(close)

    close.addEventListener('click', function() {
        close.classList.toggle('close-menu');
        close.classList.toggle('open-menu');
        nav.classList.toggle('close');
        nav.classList.toggle('open');
        //open-menu
        closeSVG.classList.toggle('hidden-menu-toggle'); // менюшка закр
        openSVG.classList.toggle('hidden-menu-toggle'); // менюшка открыв
    });
});