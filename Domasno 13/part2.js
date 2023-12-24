let containerDiv = document.getElementById('container');
let numbers = [5, 2, 5, 4, 7, 8, 10];

function addElementsToListAndSum(array){
    if(!array.length){
        alert('Enter a valid input');
        return;
    }
    let ul = document.createElement('ul');
    let paragraph = document.createElement('p');
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        let li = document.createElement('li');
        li.innerText = array[i];
        ul.appendChild(li);
        
        sum+=array[i];

        paragraph.innerHTML += `${array[i]}`
        if(i!==array.length-1){
            paragraph.innerHTML += ` + `
        }else{
            paragraph.innerHTML += ` = `
        }
    }

    paragraph.innerHTML += `${sum}`;
    containerDiv.appendChild(ul);
    containerDiv.appendChild(paragraph);
}

addElementsToListAndSum(numbers);