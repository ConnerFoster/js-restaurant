const pageLoader = function() {
    const content = document.querySelector('#content');

    const pageHeader = document.createElement('h1');
    pageHeader.textContent = "Lorem Café";
    content.appendChild(pageHeader);
    pageHeader.style.color = "white";
    pageHeader.classList.add('float-left')
    pageHeader.style.marginTop = "1em"

    const tabs = document.createElement('div');
    tabs.innerHTML = 
    `<ul class="tabs float-right text-light">
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>
    </ul>
    <div class="clearfix"></div>
    `;
    content.appendChild(tabs);

}

export default pageLoader