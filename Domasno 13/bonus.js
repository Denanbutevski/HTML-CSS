let containerDiv = document.getElementById('container');

let recipeName;
let numberOfIngridients;
let ingridients = [];

getRecipeName();

function getRecipeName(){
    recipeName = prompt('Enter a name for the recipe: ');
    if(!recipeName){
        alert('Enter valid name for the recipe!');
        return;
    }
    getNumOfIngridients();
}

function getNumOfIngridients(){
    numberOfIngridients = parseInt(prompt('Enter how many ingridients are needed: '));
    if(!numberOfIngridients){
        alert("Enter valid number of ingridients!");
        return;
    }
    getAllIngridients(numberOfIngridients);
}

function getAllIngridients(numOfIngridients){
    for(let i = 0; i<numOfIngridients; i++){
        let ingridientName = prompt(`Enter ingridient number ${i+1}: `);
        if(!ingridientName){
            alert('Enter a valid name for ingridient!');
            return;
        }
        ingridients.push(ingridientName);
    }
    printAllIngridientsForRecipe();
}

function printAllIngridientsForRecipe(){
    if(!ingridients.length){
        alert('Invalid input');
        return;
    }

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let headRow = document.createElement('tr');
    let th = document.createElement('th');

    th.innerText = recipeName;
    th.style.border = '1px solid black';
    headRow.appendChild(th);
    thead.appendChild(headRow);

    for(let i = 0; i<ingridients.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        td.innerText = ingridients[i];
        td.style.border = '1px solid black';
        tr.appendChild(td);
        
        tbody.appendChild(tr);
    }


    table.appendChild(thead);
    table.appendChild(tbody);

    table.style.border = '1px solid black';
    containerDiv.appendChild(table);
}

