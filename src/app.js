(function(){
    //variable

    //events
    window.addEventListener('DOMContentLoaded', () => {
        //document.querySelector("#demo")
        console.log("connected");
        fetchData(); //start fetch data

    })

    //method
    
    //fetch data --api
    function fetchData(){
        fetch (`https://api.json-generator.com/templates/dkGUFM9yecgO/data?access_token=8ziyqp1pbfk3vid625oroxgvsh5yzzb7m9lqcadk`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            data.forEach( elem => {
                elem.recipes.forEach(recipe => {
                    console.log(recipe);
                    recipes(recipe);
                });
                

            })
            
        })
        .catch(err => console.error(err));
    }

    //create recipe post
    const recipes = (rc) => {
        let demo = document.getElementById("demo");
        let output = '';
        //console.log(demo)

        output += `
                    <div class ="recipes">
                        <div class  = "recipe">
                            <img src = ${rc.desc} alt="recipe" width="300px">
                            <h5> ${rc.title} </h5>
                            <p> ${rc.desc} </p>
                            <div class =ctrls>
                                <span class = "like"> Like </span>
                                <input type="button" value ="read more" />
                            </div>
                        </div>

                    </div>
                `
        
        //update dom output
        demo.innerHTML = output;
    }
    
})();