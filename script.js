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
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});
function animateCursor(){

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

hoverElements.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="55px";
        cursor.style.height="55px";

        cursor.style.borderColor="#60A5FA";

        cursor.style.boxShadow=
        "0 0 25px rgba(59,130,246,.9),0 0 50px rgba(59,130,246,.4)";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="22px";
        cursor.style.height="22px";

        cursor.style.borderColor="#38BDF8";

        cursor.style.boxShadow=
        "0 0 10px rgba(56,189,248,.5),0 0 20px rgba(56,189,248,.2)";

    });

});
document.addEventListener("mousedown",()=>{

    cursor.style.transform="translate(-50%,-50%) scale(.75)";

});

document.addEventListener("mouseup",()=>{

    cursor.style.transform="translate(-50%,-50%) scale(1)";

});