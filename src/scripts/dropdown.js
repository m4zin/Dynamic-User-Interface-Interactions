const dropdown = (function () {

    function displayDropdown(btn, list, animation) {

        // When mouse is hovered over button.
        btn.addEventListener('click', () => {
            list.classList.toggle(animation);
        })

        // Close dropdown when clicking outside
        window.addEventListener('click', (e) => {
            // Untoggles the dropdown if clicked anywhere else on window.
            if (list.classList.contains(animation) &&
                !btn.contains(e.target) &&
                !list.contains(e.target)) {
                list.classList.remove(animation);
            }
        });

    }

    return {
        displayDropdown
    }

})()

export { dropdown }
