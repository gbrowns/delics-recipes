(function () {

    //variable
    const RECIPE_API = "https://api.json-generator.com/templates/dkGUFM9yecgO/data?access_token=8ziyqp1pbfk3vid625oroxgvsh5yzzb7m9lqcadk";
    let section = document.getElementById("recipe");
    let forms = document.querySelectorAll("form");
    let openMenu = document.querySelector(".menu");
    let closeMenu = document.querySelector(".close-menu");
    let RECIPES;
    let menu = document.querySelector(".navlinks");
    console.log(openMenu)
    console.log(closeMenu)
    console.log(menu)
   

    //events
    window.addEventListener('DOMContentLoaded', () => {
        //document.querySelector("#demo")
        console.log("connected");

        //open and close menu
        openMenu.addEventListener("click", () => {
            menu.classList.add("show-menu");
            console.log("open");
        });

        closeMenu.addEventListener("click", () => {
            menu.classList.remove("show-menu");
            console.log("close");
        });
        //close menu when click outside of menu
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("navlinks")) {
                menu.classList.remove("show-menu");
            }
        });
        //scroll event
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                document.querySelector("header").classList.add("dark-nav");
                console.log(window.scrollY)
            }

            if(window.scrollY < 100){
                document.querySelector("header").classList.remove("dark-nav");
                console.log(window.scrollY)
            }
        });

    });
        
})();