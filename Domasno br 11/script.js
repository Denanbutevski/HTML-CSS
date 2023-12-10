//Part 1
function returnTypeOfParameter(input){
    return typeof input;
}
// The console log is done outside of the function to have the point of return value
console.log(returnTypeOfParameter({}))
console.log(returnTypeOfParameter(true))
console.log(returnTypeOfParameter(7))
console.log(returnTypeOfParameter('test'))
console.log(returnTypeOfParameter())
//Part 2
function convertAge(years,isDogToHuman){
    if (isDogToHuman){
        return years*7;
    }
    return years/7;

}
console.log("To human years:",convertAge(3,true));
console.log("To dog years:",convertAge(14,false));

//Part 3
let moneyInBank = 20000;
function withdrawMoney(){
    let withdrawalAmount = parseInt(prompt("Enter amount to withdraw."));
    let outputMessage = '';
    if(moneyInBank-withdrawalAmount>=0){
        moneyInBank-=withdrawalAmount;
        outputMessage = `You withdrawed ${withdrawalAmount}, money left in the bank is ${moneyInBank}`;
        return outputMessage;
    }else if(moneyInBank-withdrawalAmount<0){
        outputMessage = `Not enough money in the bank account`;
        return outputMessage;
    }else{
        outputMessage = 'Invalid input';
        return outputMessage;
    }
}

console.log(withdrawMoney());




