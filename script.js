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
        "Frontend Developer",
        "BCA Student",
        "Problem Solver",
        "Lifelong Learner"
    ],

    typeSpeed:70,

    backSpeed:45,

    backDelay:1500,

    loop:true

});