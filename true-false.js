// normal if else
// In javaScript, any number(+,-) is true, except 0
const age = 4;
if(age){ // if(age > 0)
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}

// string
const name = "solaiman"
if(name.length){ 
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}
// whitespace

const name = " "
if(name.length){ 
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}
// without value setting

let name;
console.log(name);
if(name){ 
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}

// null value

const name = null;
console.log(name);
if(name){ 
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}

// NaN

const name = NaN;
console.log(name);
if(name){ 
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}


// 0

const name = 0; // const name = 12;
if(name || name == 0){ 
    console.log("Your condition is true");
}
else{
    console.log("Your condition is false");
}

//empty array

let name = [];
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false")
}


// Falsy Value:
//undefined, null, NaN, 0, false, "",
//Truthy Value:
//'false', '0', ' ', []
