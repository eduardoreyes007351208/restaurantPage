/* 
    aboutPage.js
    Module that sets content to About Page
*/

import { content } from './elements'
import mapImage from '../images/map.jpg'

export const aboutPage = () => {

    content.innerHTML = `
        <div id="aboutPageDiv">
            
            <h2><em>About Us</em></h2>
            <h3>Call us at: (123)456-7890</h3>
            <h3>Located at: 1234 Lipsum Ave CA, 92346</h3>
            <img class="image" src=${mapImage} alt="Map Image">
            
        </div>
    `

}