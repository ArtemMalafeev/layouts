const showMenu = (toggleId, navbarId, bodyId) => {
    const toggle = document.getElementById(toggleId);
    const navbar = document.getElementById(navbarId);
    const bodypadding = document.getElementById(bodyId);
    
    if (toggle && navbar) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('show');
            toggle.classList.toggle('rotate');
            bodypadding.classList.toggle('expander');
        });
    }
};

showMenu('nav-toggle', 'navbar', 'body');


const linkColor = document.querySelectorAll('.nav__link');
function colorLink() {
    linkColor.forEach(el => el.classList.remove('active'))
    this.classList.add('active');
}

linkColor.forEach(el => el.addEventListener('click', colorLink));
