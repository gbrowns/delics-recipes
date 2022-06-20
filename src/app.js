(function(){
    //variable

    //events
    window.addEventListener('DOMContentLoaded', () => {

    })

    //method
    
    //fetch data --api
    function fetchData(){
        fetch (`https://api.json-generator.com/templates/dkGUFM9yecgO/data?access_token=8ziyqp1pbfk3vid625oroxgvsh5yzzb7m9lqcadk`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
    }

    //create recipe post
    const recipes = (dt) => {

        let output = '';

        output += `
                    <div class ="recipes">
                        <div class  = "recipe">
                            <img src = ${dt} alt="recipe" width="300px">
                            <h5> ${dt} </h5>
                            <p> ${dt} </p>
                            <div class =ctrls>
                                <span class = "like"> Like </span>
                                <input type="button" value ="read more" />
                            </div>
                        </div>

                    </div>
                `
        
        //update dom output
    }
    
})();