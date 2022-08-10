(function () {

    //variable
    const RECIPE_API = "https://api.json-generator.com/templates/dkGUFM9yecgO/data?access_token=8ziyqp1pbfk3vid625oroxgvsh5yzzb7m9lqcadk";
    let section = document.getElementById("recipe");
    let forms = document.querySelectorAll("form");
    let openMenu = document.querySelector(".menu");
    let closeMenu = document.querySelector(".close-menu");
    let closeSidebar = document.querySelector(".close-sidebar");
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

        //open sidebar
        document.querySelectorAll(".open-sidebar").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                if (i === 0) {
                    //favorite recipes
                    console.log("favorite");
                    document.querySelector(".container").classList.add("show-menu");
                    document.querySelector(".fav").classList.add("show-menu");
                    document.querySelector(".new").classList.remove("show-menu");
                } else {
                    //create recipe
                    console.log("create");
                    document.querySelector(".container").classList.add("show-menu");
                    document.querySelector(".new").classList.add("show-menu");
                    document.querySelector(".fav").classList.remove("show-menu");
                }
            });
        });
        //close sidebar
        closeSidebar.addEventListener("click", () => {
            document.querySelector(".container").classList.remove("show-menu");
        });
        //scroll event
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                document.querySelector("header").classList.add("dark-nav");
                console.log(window.scrollY)
            }

            if (window.scrollY < 100) {
                document.querySelector("header").classList.remove("dark-nav");
                console.log(window.scrollY)
            }
        });

    });

})();