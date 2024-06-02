document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menuContent = document.querySelector('.menu-content');
    const menuMenuHover = document.querySelector('.menu-hover');
    const underMenu = document.querySelector('.menu-content-hidden');
    const closebaton = document.querySelector('.closebaton');
    const burger = document.querySelector('.burger');
    const closeBurger = document.querySelector('.menu-menu-closeBurger');

    menuBtn.addEventListener('click', function() {
        if (menuContent.classList.contains('inactive')) {
            menuContent.classList.remove('inactive');
            menuContent.classList.add('active');

        } else {
            menuContent.classList.remove('active');
            menuContent.classList.add('inactive');
        }
    });

    menuMenuHover.addEventListener('mouseover', function() {
        underMenu.style.animation = 'slideInMenu 2s ease 0s 1 alternate forwards running';
        underMenu.classList.add('active');
        underMenu.classList.remove('inactive');
        console.log('open Menu --> Menu');
    });

    closebaton.addEventListener('click', function() {
        underMenu.style.animation = 'slideOutMenu 2s';
        underMenu.classList.add('inactive');
        underMenu.classList.remove('active');
        console.log('close Menu --> Menu')

    });

    burger.addEventListener('click', function() {
      burger.classList.add('active');
      closeBurger.classList.add('active');
      closeBurger.classList.remove('inactive');
      closeBurger.style.animation = 'slideInMenu 1s ease 0s 1 alternate forwards running';
      menuContent.classList.add('inactive');
      menuContent.classList.remove('active');
    });

    closeBurger.addEventListener('click', function() {
      burger.classList.remove('active');
      closeBurger.classList.remove('active');
      closeBurger.classList.add('inactive');
      closeBurger.style.animation = 'slideOutMenu 1s ease 0s 1 alternate forwards running';
      menuContent.classList.add('active');
      menuContent.classList.remove('inactive');
      underMenu.style.animation = 'slideOutMenu 0.2s';
        underMenu.classList.add('inactive');
        underMenu.classList.remove('active');
        console.log('close Menu --> Menu')

    });




});