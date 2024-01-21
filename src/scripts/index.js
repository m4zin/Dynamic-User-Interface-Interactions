import '../styles/navbar.css'
import { dropdown } from './dropdown'

function runDropDown() {
  // Navbar dropdown stuff.

  // dropping down on click of navbar button services.
  const servicesBtn = document.querySelector('.services-btn')
  const servicesList = document.querySelector('.services-dropdown')

  // dropping down on click of item four button.
  const itemThreeBtn = document.querySelector('.item-three-btn')
  const itemThreeList = document.querySelector('.item-three-dropdown')
  const itemFourBtn = document.querySelector('.item-four-btn')
  const itemFourList = document.querySelector('.item-four-dropdown')

  dropdown.displayDropdown(itemThreeBtn, itemThreeList, 'show-dropdown')
  dropdown.displayDropdown(itemFourBtn, itemFourList, 'show-dropdown')
  dropdown.displayDropdown(servicesBtn, servicesList, 'show-dropdown')
}

(function() {
  runDropDown()
})()

