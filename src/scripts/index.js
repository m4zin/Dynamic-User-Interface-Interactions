import '../styles/styles.css'
// import { dropDown } from './dropdown'

(function() {
    // For mobile menu
    let mobDropDownItems = document.querySelector('.hamburger-menu-items');
    let mobDropDownBtn = document.querySelector('.hamburger-menu-btn');

    mobDropDownBtn.addEventListener('click', () => {
        mobDropDownItems.style.display = (mobDropDownItems.style.display === 'none' || mobDropDownItems.style.display === '') ? 'flex' : 'none';
    });
})();