const students = [
    {id: 21, name: "Mim"},
    {id: 31, name: "Akib"},
    {id: 41, name: "Lingkon"},
    {id: 71, name: "Moshiur"}
    
];

const names = students.map( s => s.name);
console.log(names);


const ids = students.map(s => s.id);
console.log(ids);


const bigger = students.filter( s =>s.id>40);
console.log(bigger);


const biggerOne = students.find( s =>s.id>40);
console.log(biggerOne);