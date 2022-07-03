const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.navLink');
const header = document.querySelector('#navBar');
const navStart = document.querySelector('#navStart');
const navAbout = document.querySelector('#navAbout');
const navProject = document.querySelector('#navProject');
const navContact = document.querySelector('#navContact');

// For hamburger
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('navOpen');
});
navLinks.forEach(links => {
    links.addEventListener('click', () => {
        document.body.classList.remove('navOpen');
    })
});


//  navigation bar
window.addEventListener("scroll", () => {
    header.classList.toggle("fixed", window.scrollY > 1020);
})

window.addEventListener("scroll", () => {
    navStart.classList.toggle("activeNav", window.scrollY < 690);
})

window.addEventListener("scroll", () => {
    navAbout.classList.toggle("activeNav", window.scrollY >= 690);
})
window.addEventListener("scroll", () => {
    navProject.classList.toggle("activeNav", window.scrollY >= 1600);
    navAbout.classList.toggle("nonActive", window.scrollY >= 1600);
})
window.addEventListener("scroll", () => {
    navContact.classList.toggle("activeNav", window.scrollY >= 2100);
    navProject.classList.toggle("nonActive", window.scrollY >= 2100);
})



