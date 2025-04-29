import './styles.css'
import './reset.css'

import { home, menu, about, content } from './modules/elements'
import { helloo } from './modules/homePage'
import { menuPage } from './modules/menuPage'

(() => {
    helloo()
    home.addEventListener('click', () => {
        helloo()
    })
    menu.addEventListener('click', () => {
        menuPage()
    })
    
})()