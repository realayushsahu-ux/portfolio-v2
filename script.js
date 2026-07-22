window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.opacity = "0";

        setTimeout(() => {

            document.querySelector(".loader").style.display = "none";

        },500);

    },900);

});