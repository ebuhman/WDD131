const menuButton = document.querySelector('.menu-btn');
const linksDisplay = document.querySelector('nav');

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle('change');
    linksDisplay.style.display = linksDisplay.style.display === '' ? 'flex' : '';
});