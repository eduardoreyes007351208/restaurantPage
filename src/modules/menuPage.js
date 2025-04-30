/* 
    menuPage.js
    Module that sets content to Menu Page
*/

import { content } from "./elements"

function createMeal (name, price, desc) {
    return {name, price, desc};
}
let addRecipe = (n, p, d, m) => {
    let meal = createMeal(n, p, d)
    m.push(meal)
}

export const menuPage = () => {
    const menuList = [];
    addRecipe('Acai Bowl', 9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('Blueberry Bowl', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('Raspberry Bowl', 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('HoneyBowl', 7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('Acai Bowl Combo', 18, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('Blueberry Bowl Combo', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('Raspberry Bowl Combo', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)
    addRecipe('HoneyBowl Combo', 14, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget elit ac ligula porta semper tincidunt nec lorem. Curabitur at.', menuList)

    content.innerHTML = '<h1 id="menuPageTitle">Menu</h1> <div> <ul id="menuContainer">' + menuList.map((menuItem) => {
        return `<li class="listItems">
            <div class="menuCard">
                <h2 class="menuCardTitle">${menuItem.name}</h2>
                <span class="menuCardPrice">Price: $${menuItem.price}</span>
                <p>${menuItem.desc}</p>
            </div>
        </li>`
    }).join('') + '</ul>' + '</div>'

}