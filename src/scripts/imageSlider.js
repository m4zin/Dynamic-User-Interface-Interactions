const imageSlider = (function() {

    // Keeping track of sliding images
    let currentImage = 1

    // The images
    const imageOne = document.getElementById('imageOne')
    const imageTwo = document.getElementById('imageTwo')
    const imageThree = document.getElementById('imageThree')

    function switchImageDisplay(firstDisplay, secDisplay, thirdDisplay) {
        imageOne.style.opacity = firstDisplay
        imageTwo.style.opacity = secDisplay
        imageThree.style.opacity = thirdDisplay
    }

    function selectImage(currentImage) {
        if(currentImage == 1) {
            switchImageDisplay('1', '0', '0')
        } else if(currentImage == 2) {
            switchImageDisplay('0', '1', '0')
        } else if(currentImage == 3) {
            switchImageDisplay('0', '0', '1')
        }  
    }

    function nextImage() {
        if(currentImage == 3) {
            return
        }
        
        currentImage = currentImage + 1

        selectImage(currentImage)
    }

    function prevImage() {
        if(currentImage == 1) {
            return
        }

        currentImage = currentImage - 1

        selectImage(currentImage)
    }

    function slideImage(e) {
        if(e.target.className == 'next-btn') {
            nextImage()
        } 
        else if(e.target.className == 'prev-btn') {
            prevImage()
        }
    }

    // The buttons
    document.querySelector('.prev-btn').addEventListener('click', slideImage)
    document.querySelector('.next-btn').addEventListener('click', slideImage)

    return {
        slideImage
    }

})()

export {imageSlider}