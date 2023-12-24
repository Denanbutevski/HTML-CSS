let firstParagraph = document.getElementsByClassName('paragraph')[0];
let secondParagraph = document.getElementsByClassName('second')[0];
let firstHeader = document.getElementById('myTitle');
let secondHeader = document.querySelector('div:nth-child(3) > h1');
let thirdHeader = document.querySelector('div:nth-child(3) > h3');

function changeElementText(node, newText){
    node.innerText = newText;
}

changeElementText(firstParagraph, "New text paragraph first");
changeElementText(secondParagraph, "New text paragraph second");
changeElementText(firstHeader, "New text header first");
changeElementText(secondHeader, "New text header second");
changeElementText(thirdHeader, "New text header third");