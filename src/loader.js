const pageLoader = function() {
    const content = document.querySelector('#content');

    const pageHeader = document.createElement('h1');
    pageHeader.textContent = "Lorem Bakery";
    content.appendChild(pageHeader);
    pageHeader.style.color = "white";
    pageHeader.classList.add('float-left')
    pageHeader.style.marginTop = "1em"

    const tabs = document.createElement('div');
    tabs.innerHTML = 
    `<ul class="tabs float-right text-light">
    <li id="navbar-home"> <a id="home" href="#">Home</a> </li>
    <li id="navbar-menu"> <a id="menuA" href="#">Menu</a> </li>
    <li id="navbar-contact"> <a id="contact" href="#">Contact</a> </li>
    </ul>
    <div class="clearfix"></div>
    `;
    content.appendChild(tabs);

}

export default pageLoader