import '../styles/styles.css'
import { dropdown } from './dropdown'
import { mobile } from './mobile'

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

function runMobMenu() {
  const hamburgerBtn = document.querySelector('.hamburger-btn')
  const home = document.querySelector('.center-logo-and-quote')
  const menu = document.querySelector('.mobile-menu')
  mobile.openMenu(hamburgerBtn, home, menu)  
}

function runMobServicesSec() {
  const mobMenu = document.querySelector('.mob-services-dropdown')
  const sectionBtn = document.querySelector('.mob-btn-services')
  mobile.openSectionMenu(sectionBtn, mobMenu) 
}


(function() {
  // runDropDown()
  runMobMenu()
  runMobServicesSec()
})()

