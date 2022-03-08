// Header Section
let menuBar = document.querySelector("#menu-bar");
let header = document.querySelector("header");
//Menu Bar
menuBar.onclick = () => {
    menuBar.classList.toggle("fa-times");
    header.classList.toggle("show");
}
window.onscroll = () => {
    menuBar.classList.remove("fa-times");
    header.classList.remove("show");
}

// Custom Cursor
let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + "px";
    cursor1.style.left = e.pageX + "px";
    cursor2.style.top = e.pageY + "px";
    cursor2.style.left = e.pageX + "px";
}

//Navbar links
let navLinks = document.querySelectorAll("nav li a");
navLinks.forEach(function (links) {
        links.onmouseenter = () => {
            cursor1.classList.add("active");
            cursor2.classList.add("active");
        }
        links.onmouseleave = () => {
            cursor1.classList.remove("active");
            cursor2.classList.remove("active");
        }
    }
)