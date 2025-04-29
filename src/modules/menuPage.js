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

    content.innerHTML = '<h1>Menu</h1> <ul>' + menuList.map((menuItem) => {
        return `<li>
            <div class="menuCard">
                <h2>${menuItem.name}</h2>
                <span>${menuItem.price}</span>
                <p>${menuItem.desc}</p>
            </div>
        </li>`
    }).join('') + '</ul>'

}