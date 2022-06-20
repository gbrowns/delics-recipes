(function(){
    //variable

    //events

    //method
    
    //fetch data --api
    fetch (`https://api.json-generator.com/templates/dkGUFM9yecgO/data?access_token=8ziyqp1pbfk3vid625oroxgvsh5yzzb7m9lqcadk`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err));
})();