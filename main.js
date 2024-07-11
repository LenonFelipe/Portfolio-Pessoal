function openMenu(){

    const menuOpen = document.querySelector('#menuOpen');
    const menuClose = document.querySelector('#menuClose');
    const menu = document.querySelector('#menuMobile');


    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    menu.style.left = '100px';

}

function closeMenu(){

    const menuOpen = document.querySelector('#menuOpen');
    const menuClose = document.querySelector('#menuClose');
    const menu = document.querySelector('#menuMobile');

    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
    menu.style.left = '-1000px';

}