document.getElementById('menuBtn').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const button = document.getElementById('menuBtn');
    
    menu.classList.toggle('show');
    button.classList.toggle('show');
});