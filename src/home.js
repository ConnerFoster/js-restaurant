import contactPage from "./contact";

const homepage = function() {
    const content = document.querySelector('#content');

    const pageDiv = document.createElement('div');
    pageDiv.id = "page-div";

    content.appendChild(pageDiv);

    const reserveButton = document.createElement('button');
    reserveButton.textContent = "Reserve Now";
    reserveButton.classList.add('btn');
    reserveButton.classList.add('btn-light');
    reserveButton.style.marginTop = "12em";
    reserveButton.classList.add('mr-1')
    pageDiv.appendChild(reserveButton);
    reserveButton.id = "reserve-button"

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact Us";
    contactButton.classList.add('btn');
    contactButton.classList.add('btn-outline-light');
    contactButton.style.marginTop = "12em";
    pageDiv.appendChild(contactButton);
    contactButton.id = "contact-button"

    const homeAnchor = document.querySelector('#home')
    const menuAnchor = document.querySelector('#menuA')
    const contactAnchor = document.querySelector('#contact')
    reserveButton.addEventListener('click', contactFunction);
    contactButton.addEventListener('click', contactFunction);

    function contactFunction() {
        document.querySelector('#page-div').remove();
        contactPage();
        contactAnchor.classList.add('current');
        menuAnchor.classList.remove('current');
        homeAnchor.classList.remove('current');
    }
}

export default homepage