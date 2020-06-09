const menu = function() {
    const content = document.querySelector('#content');

    const pageDiv = document.createElement('div');
    pageDiv.id = "page-div";

    content.appendChild(pageDiv);

    function createMenuItem(name, description) {
        const newDiv = document.createElement('div');
        newDiv.textContent = name;
        newDiv.classList.add('menu-name');
        newDiv.classList.add('text-center')
        pageDiv.appendChild(newDiv);

        const descriptionDiv = document.createElement('p');
        descriptionDiv.textContent = description;
        descriptionDiv.classList.add('menu-desc');
        newDiv.appendChild(descriptionDiv);
        
    }

    createMenuItem('Cookies', 'Your choice of Chocolate Chip, Oatmeal Raisin, or Macadamia Nut.')
    createMenuItem('Cheesecake', 'New York Style, or Cherry Cheesecake')
    createMenuItem('Cakes', 'Chocolate, Wedding Cake, or our specialty Lorem Swirl Cake')
}

export default menu