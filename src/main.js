function openMenu(){

    const menuOpen = document.querySelector('#menuOpen');
    const menuClose = document.querySelector('#menuClose');

    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';

}

function closeMenu(){

    const menuOpen = document.querySelector('#menuOpen');
    const menuClose = document.querySelector('#menuClose');

    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';

}