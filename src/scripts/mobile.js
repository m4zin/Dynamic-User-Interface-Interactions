const mobile = (function() {
    function openMenu(btn, home, menu) {
        btn.addEventListener('click', () => {
            const homeDisplayStyle = getComputedStyle(home).display;
            home.style.display = homeDisplayStyle === 'flex' ? 'none' : 'flex';
            menu.style.display = homeDisplayStyle === 'flex' ? 'flex' : 'none';

        })
    }

    function openSectionMenu(sectionBtn, sectionMenu) {
        sectionBtn.addEventListener('click', () => {
            const sectionMenuDisplay = getComputedStyle(sectionMenu).display;
            sectionMenu.style.display = sectionMenuDisplay === 'flex' ? 'none' : 'flex';
        })
    }

    return {
        openMenu,
        openSectionMenu
    }
})()

export {mobile}