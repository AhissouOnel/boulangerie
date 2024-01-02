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


    //setupListeners()
}