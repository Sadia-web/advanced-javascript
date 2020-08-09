// Normal for loop

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// Using Break

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// for(let i = 0; i < numbers.length; i++){ 
//     //console.log(numbers[i]);  
//     if(numbers[i] > 30 ){
//         break;
//     }
//     console.log(numbers[i]);
// }

// Using Continue

const numbers = [10, 20, 30, -40, 50, 60, 70, -80, 90];
for(let i = 0; i < numbers.length; i++){   
    if(numbers[i] < 0 ){
        continue;
    }
    console.log(numbers[i]);
}