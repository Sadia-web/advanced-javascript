// Slice

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const part = numbers.slice(2, 5);
console.log(part);
console.log(numbers);

// Splice

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//const removed = numbers.splice(2, 5);
const removed = numbers.splice(2, 5, 200, 55, 66);
console.log(removed);
console.log(numbers);

// Join

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const together = numbers.join("");
// const together = numbers.join(" ");
const together = numbers.join(" Hi , ");
console.log(together);
