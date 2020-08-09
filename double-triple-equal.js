const first = 2;
const second = 3;
if(first == second){
    console.log("condition is true");

}
else{
    console.log("condition is false")
}

// == checks only value

const first = 2;
const second = "2";
if(first == second){
    console.log("condition is true");

}
else{
    console.log("condition is false")
}

// === checks value and type

const first = 2;
const second = "2";
if(first === second){
    console.log("condition is true");

}
else{
    console.log("condition is false")
}

// == compares 1 and true..But if I give === it will confused.

const first = 1;
const second = true;
if(first == second){
    console.log("condition is true");

}
else{
    console.log("condition is false")
}

// == compares 0 and false..But if I give === it will confused.

const first = 0;
const second = false;
if(first == second){
    console.log("condition is true");

}
else{
    console.log("condition is false")
}