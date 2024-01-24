const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const imagemClicavel = document.getElementById('logo');

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    openMenu.style.display = 'none';
    setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.right = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
});

imagemClicavel.addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send?phone=5547991294901&text=Ol%C3%A1%2C%20teria%20um%20hor%C3%A1rio%20dispon%C3%ADvel%20pra%20agendar%3F';
});