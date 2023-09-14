window.onscroll = function() {scrollFunction(); navbarFixed();};


 // Navbar Fixed on Top
function navbarFixed() {
    let li = document.querySelectorAll('.menu_list a')
    let submenu = document.querySelectorAll('.submenu')
    if (window.scrollY > 300) {
        document.getElementById("nav_bar").style.position= "fixed";
        document.getElementById("nav_bar").style.zIndex = "22";
        document.querySelector('#nav_bar').style.backgroundColor = '#292929'
        document.querySelector('#nav_bar').style.color = '#fff';
        document.getElementById("nav_bar").style.height= "100px";
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = '#fff'
        }
        for (let i = 0; i < submenu.length; i++) {
            submenu[i].style.backgroundColor = '#292929'
        }
    }
    else if(scrollY < 300){
        document.getElementById("nav_bar").style.position = "absolute"
        document.querySelector('#nav_bar').style.backgroundColor = '#fff'
        for (let i = 0; i < li.length; i++) {
            li[i].style.color = ''
        }
        for (let i = 0; i < submenu.length; i++) {
            submenu[i].style.backgroundColor = ''
        }
    }
}


// Scroll to Top
var mybutton = document.getElementById("myBtn");


function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener('click', topFunction)
function topFunction() { 
    window.scrollTo({top: 0, behavior: 'smooth' });
}



// Hover Cards Effects
let img = document.querySelectorAll('.room-box-img img')
let box = document.querySelectorAll('.room-box')
let title = document.querySelectorAll('.room-caption h3')

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('mouseover', ()=> {
        title[i].style.color = '#f1b233'
        title[i].style.cursor = 'pointer'
    })
}

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', ()=> {
        img[i].style.transition = 'all .6s ease-out 0s'
        img[i].style.transform = 'rotate(15deg) scale(1.1)'
    })
}

for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('mouseout', ()=> {
        title[i].style.color = ''
    })
}

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseout', ()=> {
        img[i].style.transition = 'all .6s ease-out 0s'
        img[i].style.transform = ''
    })
}


// Burger Menu

let burger = document.querySelector('.menu_icon')
let menu = document.querySelector('.menu_list')


burger.addEventListener('click', toggleMenu)
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    } else {
        menu.classList.add('active')
    }
}

