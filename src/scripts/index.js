import '../styles/styles.css'
import { dropdown } from './dropdown'

(function () {

    // dropping down on hover of navbar button services.
    const servicesBtn = document.querySelector('.services-btn')
    const servicesList = document.querySelector('.services-dropdown')

    dropdown.displayDropdown(servicesBtn, servicesList, 'show-dropdown')
})()


