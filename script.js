window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.opacity = "0";

        setTimeout(() => {

            document.querySelector(".loader").style.display = "none";

        },500);

    },900);

});
const typed = new Typed(".typing",{

    strings:[
        "Aspiring Full Stack Developer",
        "A Tech Guy!",
        "Software Developer",
        "Problem Solver",
        "Work with Artificial Intelligence"
    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1500,

    loop:true

});
window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage = (scrollTop/scrollHeight)*100;

    document.getElementById("progress-bar").style.width =
        percentage + "%";

});
const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
AOS.init({

    duration:900,

    once:true,

    offset:120,

    easing:"ease-out-cubic"

});