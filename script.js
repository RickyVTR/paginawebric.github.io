function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuBtn = document.querySelector('.menu-btn');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menuBtn.classList.remove('show');
    } else {
        menu.classList.add('show'); 
        menuBtn.classList.add('show'); 
    }
}