fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response){
    response.json()
            .then(async function(data){
                let todo = data.filter(todo=>todo.id===1)
                console.log(todo[0]);  
                let userData = await getUserDetails(todo[0].userId);
                if(userData){
                    console.log(userData); 
                }else{
                    console.log("Error fetching");
                }
            })
            .catch(function(error){
                console.log(error);
            })
})
.catch(function(error){
    console.log(error);
})

async function getUserDetails(userId){
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let parsedData = await response.json();
        return parsedData;
    } catch (errorResponse) {
        console.log(errorResponse);
        return false;
    }
}