
let actors=[
    {
        name:"Amithabh Bachhan",
        age:"66",
        country: "India",
        hobbies:["acting","playing","KBC"]
    

    },
    {
        name:"Leonardo Capri",
        age:"65",
        country: "Britain",
        hobbies:["acting","playing","Hockey"]
    
    },
    {
        name:"Caesar Russel",
        age:"25",
        country: "Russia",
        hobbies:["acting","playing","dance"]
    },
    {
        name:"Hrithik Roshan",
        age:"29",
        country: "India",
        hobbies:["acting","playing","Dance","Cricket"]
    
    
    }]
    function DisplayAge(actors){
    console.log("Those who have age lesthan 30 are");
    actors.forEach(element =>{
        if(element.age<30)
        {
            console.log(element);
        }
    });
    }


    function displayCountry(actors){
    {
        console.log("People with country as India");
        actors.forEach(element =>{
            if(element.country == "India"){
                console.log(element);
            }
        });
    }
}
DisplayAge(actors);
displayCountry(actors);