let button = document.getElementById("fetch");
let resultDiv = document.getElementById("result");

button.addEventListener("click", function(event){
    event.preventDefault()
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
    .then(function(response){
        response.json()
                .then(function(data){
                    printOnScreen(data);
                })
                .catch(function(error){
                    console.log(error);
                })
    })
    .catch(function(error){
        console.log(error);
    })

});

function printOnScreen(data){
    let h1 = document.createElement("h1");
    let ul = document.createElement("ul");
    for(let student of data.students){
        let li = document.createElement("li");
        li.innerText=student;
        ul.appendChild(li);
    }
    h1.innerText = data.academy;
    resultDiv.appendChild(h1);
    resultDiv.appendChild(ul);
}