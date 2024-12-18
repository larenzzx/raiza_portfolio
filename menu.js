const menu = document.querySelector('.menu');
const menu_modal = document.querySelector('.menu_link');
const links = document.querySelectorAll('.linkss');

menu.addEventListener('click', () => {
    if(menu_modal.style.display === 'flex') {
        menu_modal.style.display = 'none';
    } else {
        menu_modal.style.display = 'flex';
    }
});

// Add click event listener to each .linkss element
links.forEach(link => {
    link.addEventListener('click', () => {
        menu_modal.style.display = 'none';
    });
});

// Hide menu_modal when scrolling
// window.addEventListener('scroll', () => {
//     menu_modal.style.display = 'none';
// });