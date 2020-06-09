import homepage from "./home";
import pageLoader from "./loader";
import menu from "./menu";
import contactPage from "./contact";

let currentPage = '';

(function () {
pageLoader();
homepage();
})();




const navbarHome = document.querySelector('#navbar-home');
const navbarMenu = document.querySelector('#navbar-menu');
const navbarContact = document.querySelector('#navbar-contact');
const content = document.querySelector('#content')
const homeAnchor = document.querySelector('#home')
const menuAnchor = document.querySelector('#menuA')
const contactAnchor = document.querySelector('#contact')

homeAnchor.classList.add('current');


navbarMenu.addEventListener('click', () => {
    document.querySelector('#page-div').remove();
    menu();
    menuAnchor.classList.add('current');
    homeAnchor.classList.remove('current');
    contactAnchor.classList.remove('current');
})

navbarHome.addEventListener('click', () => {
    document.querySelector('#page-div').remove();
    homepage();
    homeAnchor.classList.add('current');
    contactAnchor.classList.remove('current');
    menuAnchor.classList.remove('current');
})

function contactFunction() {
    document.querySelector('#page-div').remove();
    contactPage();
    contactAnchor.classList.add('current');
    menuAnchor.classList.remove('current');
    homeAnchor.classList.remove('current');
}

navbarContact.addEventListener('click', contactFunction);
