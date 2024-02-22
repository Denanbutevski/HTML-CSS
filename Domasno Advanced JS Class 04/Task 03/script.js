let button = document.getElementById("fetch");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let resultTable = document.getElementById("result");
let pageNumberParagraph = document.getElementById("pageNumber");

let pageNumber = 1;

function printOnScreen(planets){
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    thead.innerHTML = `
    <tr>
        <th>Planet Name</th>
        <th>Population</th>
        <th>Climate</th>
        <th>Gravity</th>
    </tr>
    `
    for(let planet of planets){
        let tr = document.createElement("tr");

        let planetName = document.createElement("td");
        let population = document.createElement("td");
        let climate = document.createElement("td");
        let gravity = document.createElement("td");

        planetName.innerText = planet.name;
        population.innerText = planet.population;
        climate.innerText = planet.climate;
        gravity.innerText = planet.gravity;

        tr.append(planetName, population, climate, gravity);
        tbody.appendChild(tr);
    }

    resultTable.innerHTML = "";
    resultTable.appendChild(thead);
    resultTable.appendChild(tbody);
}

function onButtonsClick(event, action){
    event.preventDefault();
    if(action==="fetch"){
        pageNumber = 1;
    }else if(action==="next"){
        pageNumber+=1;
    }else{
        pageNumber-=1;
    }

    fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    .then(function(response){
        response.json()
                .then(function(data){
                    console.log(data);
                    printOnScreen(data.results);
                    pageNumberParagraph.innerText = pageNumber;

                    if(action==="next"){
                        prevButton.style.visibility = `visible`;
                    }else if(action==="prev" && pageNumber!==1){
                        prevButton.style.visibility = `visible`;
                    }else{
                        prevButton.style.visibility = `hidden`;
                    }

                    nextButton.style.visibility = `visible`;
                })
                .catch(function(error){
                    console.log(error);
                })
    })
    .catch(function(error){
        console.log(error);
    })
}

button.addEventListener("click", function(e){
    onButtonsClick(e, "fetch");
});

nextButton.addEventListener("click", function(e){
    onButtonsClick(e, "next");
});

prevButton.addEventListener("click", function(e){
    onButtonsClick(e, "prev");
});