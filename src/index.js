import './styles.css'
import './reset.css'

import { home, menu, about, content } from './modules/elements'
import { homePage } from './modules/homePage'
import { menuPage } from './modules/menuPage'
import { aboutPage } from './modules/aboutPage'

(() => {

    homePage()

    home.addEventListener('click', () => {
        homePage();
    })
    menu.addEventListener('click', () => {
        menuPage();
    })
    about.addEventListener('click', () => {
        aboutPage();
    })

    
})()