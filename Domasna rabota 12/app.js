//Exercise 1
function tellStory(array){
    if(array.length!==3){
    return "invalidInput";
    }
    let name = array[0];
    let mood = array[1];
    let activity = array[2];
    let sentence = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
    return sentence;
    
}
let story = tellStory(["dean","happy","drinking"]);
console.log(story);

//Exercise 2
function sumNumbers(numbers){
    if(numbers.length!==5){
        return "you need to send five numbers";
    }
    let sum = 0;
    for(let i = 0;i<numbers.length;i++){
        if(!validateNumber(numbers[i])){
            return "invalid type of element,not number"
        }
        sum += numbers[i];
    }
    return sum;
}
function validateNumber(number){
    if(typeof number!=="number"){
        return false;
    }
    return true;
}
let resultOfNumbers = sumNumbers([1,2,3,4,5])
console.log(resultOfNumbers);

//Exercise 3

function createString(words){
    let result = ""
    for(let i = 0;i<words.length;i++){
    result += " "+ words[i];
    }
    return result;

}

console.log(createString(["Hello", "there", "students", "of", "SEDC", "!"]))

//Exercise 4 
let loopResult = "";
for(let i=1;i<=20;i++){
    if(i%2===0){
        loopResult += `${i}`+"\n";
    }else {
        loopResult += `${i}`+ " ";
    }
}
console.log(loopResult)

//Exercise 5

function someMinMax(arrayNumbers){
    let min ;
    let max;
    let sum;
    //find the minimum
    for(let i=0;i<arrayNumbers.length;i++){
        if(typeof arrayNumbers[i]===`number`){
            min = arrayNumbers[i];
            break
        }
    }
    //find the maximum
    for(let i=arrayNumbers.length-1;i>=0;i--){
        if(typeof arrayNumbers[i]===`number`){
            max = arrayNumbers[i];
            break
        }
    }
    if(!min || !max){
        return console.log('not found min and max');
    }
    sum = min + max;
    console.log(`min:${min},max:${max},sum:${sum}`)
}
someMinMax(["dean",3,5,6,11,true]);

//Exercise 6 

function getStudentsFullName(firstNames,lastNames){
    if(firstNames.length !== lastNames.length){
        return "invalid input";
    }
    let fullNames = [];
    for(let i=0;i<firstNames.length;i++){
        fullNames.push(`${i+1}. ${firstNames[i]} ${lastNames[i]}`);
    }
     return fullNames;
}
console.log(getStudentsFullName(["Bob","Jill"],["Gregory","Wurtz"]));