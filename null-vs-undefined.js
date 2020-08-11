// type 1

let bird;
console.log(bird);

// type 2 : If I not return

function add(num1, num2){
    console.log(num1 + num2);
}
const result = add(13, 82);
console.log(result);

// type 3: If not set anything after return

function add(num1, num2){
    console.log(num1 + num2);
    return;
}
const result = add(13, 82);
console.log(result);

// type 4: parameter k pass na korle

function add(num1, num2){
    console.log(num1, num2);
}
const result = add(13);
console.log(result);

//type 5: if not find property

const joker = {name: "smart dude", phone: "6567"}
console.log(joker.movie);

let ages = [2, 65, 7];
console.log(ages[22]);

// if I set undefined value

let fun = undefined;
console.log(fun);


// Null means empty. when I set the value of null, then I will get Null

