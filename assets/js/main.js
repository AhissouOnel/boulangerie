window.onload = () => {

    //changement sur le lien actif
    const currentUrl = window.location.href;
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const navItem = item.querySelector('a');
        const linkUrl = navItem.getAttribute('href');

        if (currentUrl.endsWith(linkUrl)) {
            item.style.textDecoration = "underline 2px solid white"
            item.style.lineHeight = "auto"
        }
    })


    //défilement slider
    const btnPrev = document.getElementById('previous')
    const btnNext = document.getElementById('next')

    function previous() {
        const widthSlider = document.querySelector('.slider').offsetWidth;
        const sliderContent = document.querySelector('.slider-content')
        sliderContent.scrollLeft -= widthSlider;
        const scrollLeft = sliderContent.scrollLeft
        const itemSlider = document.querySelectorAll('.slider-image')

        //Revenir au bout du slider
        /*if (scrollLeft == widthSlider * (itemSlider.length - 1)) {
            sliderContent.scrollLeft = 0
        }*/

        if (scrollLeft == widthSlider) {
            document.getElementById('previous').style.display = "none"
        } else {
            document.getElementById('next').style.display = "block"
        }
    }

    function next() {
        const widthSlider = document.querySelector('.slider').offsetWidth;
        const sliderContent = document.querySelector('.slider-content')
        sliderContent.scrollLeft += widthSlider;
        const scrollLeft = sliderContent.scrollLeft
        const itemSlider = document.querySelectorAll('.slider-image')

        //Revenir au bout du slider
        /*if (scrollLeft == widthSlider * (itemSlider.length - 1)) {
            sliderContent.scrollLeft = 0
        }*/

        if (scrollLeft == widthSlider * (itemSlider.length - 2)) {
            document.getElementById('next').style.display = "none"
        } else {
            document.getElementById('previous').style.display = "block"
        }


    }


    btnPrev.addEventListener('click', previous)
    btnNext.addEventListener('click', next)
}