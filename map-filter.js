// Normal for loop

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
}
console.log(output);

// using map with arrow function

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// function square (element){
//     return element * element;
// }
// numbers.map(square);

// numbers.map(function(element, index, array){
//     console.log(element, index , array);
// })

// const square = element => element * element;
// const square = x => x * x;
// const result = numbers.map(function(element){
//     return element * element;
// })


const result = numbers.map(x => x * x);
console.log(result);

// filter(give an array)

const bigger = numbers.filter( x => x > 5);
console.log(bigger);

//find (give only first one)

const isThere = numbers.find( x => x > 5);
console.log(isThere);



