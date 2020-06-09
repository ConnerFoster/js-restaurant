const contactPage = function() {
    const content = document.querySelector('#content')
   
    const pageDiv = document.createElement('div');
    pageDiv.id = "page-div";
    content.appendChild(pageDiv);

    const phoneNum = document.createElement('h4');
    phoneNum.textContent = "Call Us: 812-555-5555"
    phoneNum.style.color = "white";
    pageDiv.appendChild(phoneNum);

    const emailNode = document.createElement('h4');
    emailNode.textContent = "Email Address: lorembake@notanaddress.com";
    emailNode.style.color = "white";
    pageDiv.appendChild(emailNode);

    const mailingNode = document.createElement('h4');
    mailingNode.textContent = "Mailing Address: 123 E Lorem Rd "
    mailingNode.style.color = "white";
    pageDiv.appendChild(mailingNode);
}

export default contactPage