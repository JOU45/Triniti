document.addEventListener('DOMContentLoaded', function() {
    const close = document.querySelector('.closebaton'); // мненюшка с керстом или 3 богатыря
    const nav = document.querySelector('.navbar'); // менюшка мейн
    const openSVG = document.querySelector('.burger'); // toggle(open)
    const closeSVG = document.querySelector('.closeSVG'); // toggle(close)
    const open_pay = document.querySelector('.paypay');
    const open_after_pay = document.querySelector('.after-pay');
    const pay = document.querySelector('.pay');
    const info = document.querySelector('.info');
    const submit_card_pay = document.querySelector('.submit_card_pay');

    close.addEventListener('click', function() {
        close.classList.toggle('close-menu');
        close.classList.toggle('open-menu');
        nav.classList.toggle('close');
        nav.classList.toggle('open');
        //open-menu
        closeSVG.classList.toggle('hidden-menu-toggle');
        openSVG.classList.toggle('hidden-menu-toggle');
    });

    open_pay.addEventListener('click', function(){
        pay.classList.add('pay_confirm');
        info.classList.add('pay_truns');

    });

    submit_card_pay.addEventListener('click', function(){
        pay.classList.add('pay_truns');
        open_after_pay.classList.add('pay_confirm');

    });
});

    window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('anim_load_close');
});

document.querySelector('.date-card').addEventListener('input', function(e) {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length <= 2) {
        e.target.value = input;
    } else if (input.length <= 4) {
        e.target.value = input.slice(0, 2) + '/' + input.slice(2);
    } else {
        e.target.value = input.slice(0, 2) + '/' + input.slice(2, 4);
    }
});

document.getElementById('cardNumber').addEventListener('input', function (e) {
    var target = e.target;
    var position = target.selectionEnd; // сохраняем позицию курсора
    var input = target.value.replace(/\D/g, '').substring(0, 16); // убираем все не цифры
    var numberFormatted = input.replace(/(\d{4})(?=\d)/g, '$1 '); // ставим пробелы после каждых 4 цифр
    target.value = numberFormatted.trim(); // убираем пробелы в конце
    target.setSelectionRange(position, position); // возвращаем позицию курсора
});

document.querySelector('.number-card-cvv').addEventListener('input', function(e) {
    let input = e.target.value.replace(/\D/g, ''); 
    if (input.length >= 3) {
        input = input.slice(0, 3);
    }
    e.target.value = input;
});