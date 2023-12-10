let year = parseInt(prompt("Enter your year of birth: "));
let zodiacYear = (year-4)%12;
if(zodiacYear===0){
    console.log("Rat");
}else if(zodiacYear === 1){
    console.log("Ox");
}else if(zodiacYear === 2){
    console.log("Tiger");
}else if(zodiacYear === 3){
    console.log("Rabbit");
}else if(zodiacYear === 4){
    console.log("Dragon");
}else if(zodiacYear === 5){
    console.log("Snake");
}else if(zodiacYear === 6){
    console.log("Horse");
}else if(zodiacYear === 7){
    console.log("Goat");
}else if(zodiacYear === 8){
    console.log("Monkey");
}else if(zodiacYear === 9){
    console.log("Rooster");
}else if(zodiacYear === 10){
    console.log("Dog");
}else if(zodiacYear === 11){
    console.log("Pig");
}else{
    console.log("Invalid input.")
}