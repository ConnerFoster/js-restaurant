const homepage = function() {
    const content = document.querySelector('#content');

    const reserveButton = document.createElement('button');
    reserveButton.textContent = "Reserve Now";
    reserveButton.classList.add('btn');
    reserveButton.classList.add('btn-light');
    reserveButton.style.marginTop = "12em";
    reserveButton.classList.add('mr-1')
    content.appendChild(reserveButton);

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact Us";
    contactButton.classList.add('btn');
    contactButton.classList.add('btn-outline-light');
    contactButton.style.marginTop = "12em";
    content.appendChild(contactButton);
}

export default homepage