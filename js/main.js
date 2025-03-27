'use scrict'
const menuItems = document.querySelectorAll('.menu__link');

menuItems.forEach(item => {
    item.addEventListener('click', () => {        
        menuItems.forEach(item => {
            item.classList.remove('menu__link-active');
        });       
        item.classList.add('menu__link-active');
    });
});

