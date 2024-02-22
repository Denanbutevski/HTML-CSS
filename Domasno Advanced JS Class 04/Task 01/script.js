let button = document.getElementById("fetch");
let resultDiv = document.getElementById("result");

button.addEventListener("click", function(event){
    event.preventDefault()
    fetch("http://api.open-notify.org/astros.json")
    .then(function(response){
        response.json()
                .then(function(data){
                    printOnScreen(data.people);   
                })
                .catch(function(error){
                    console.log(error);
                })
    })
    .catch(function(error){
        console.log(error);
    })

});

function printOnScreen(astronauts){
    let ul = document.createElement("ul");
    for(let astronaut of astronauts){
        let li = document.createElement("li");
        li.innerText=astronaut.name;
        ul.appendChild(li);
    }

    resultDiv.appendChild(ul);
}