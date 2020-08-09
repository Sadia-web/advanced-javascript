function sum(first, second){
    let result = first + second;
    //console.log(result);
    return result;
}

const output = sum(3, 7);
console.log(output);

// global variable 

let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    console.log(bonus);
    return result;
}

const output = sum(3, 7);
console.log(output);
console.log(bonus);

// using Const

function sum(first, second){
    let result = first + second;
    if(result > 9 ){
        const mood = "happy";
        console.log(mood);
    }
    return result;
}

const output = sum(3, 7);
console.log(output);

// using let

function sum(first, second){
    let result = first + second;
    if(result > 9 ){
        let mood = "happy";
        mood = "fishy";
        //console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(3, 7);
console.log(output);



// using var

function sum(first, second){
    let result = first + second;
    if(result > 9 ){
        var mood = "happy";
        mood = "fishy";
        //console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3, 7);
console.log(output);

// get undefined
console.log(day);
var day = "friday";

// get error
console.log(day);
let day = "friday";

// get error
console.log(day);
const day = "friday";

// let and const are scope variable.They have own formula.
// var is very flexible..But sometimes create confusion.

