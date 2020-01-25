const toggler = document.querySelector('#toggler');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');

toggler.onchange = () => {
    if (toggler.checked) {
        navMenuWrapper.classList.add('nav-menu-wrapper-shown');
    } else if (!toggler.checked) {
        navMenuWrapper.classList.remove('nav-menu-wrapper-shown');
    }
};