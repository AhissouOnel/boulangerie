var navIcon = document.querySelector('.nav-icon')
var menu = document.getElementById('aside')
var close = document.querySelector('.close')

navIcon.onclick = () =>{
    menu.style.display = "block"
    menu.classList.add('slideIn')
}

close.onclick = () =>{
    menu.style.display = "none"
}
