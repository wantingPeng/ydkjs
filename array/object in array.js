//teke one or more function as an argument(parameter)
//return a function as the result

/* const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'john', age: 35 },
  { name: 'Charlie', age: 65 },
  { name: 'Char', age: 45 },
  { name: 'mia', age: 35 },
  { name: 'yoyo', age: 75 }
];


                                   // high order function, take func as parameter
const filteredPeople=people.filter((people)=>{return people.age<=30});
console.log(filteredPeople);

const peopleAge=people.map((people)=>{return people.age});
console.log(peopleAge); //[25, 30, 35, 65, 45, 35, 75]

const peopleName= people.map((people)=>{return people.name});
console.log(peopleName);//['Alice', 'Bob', 'john', 'Charlie', 'Char', 'mia', 'yoyo']

const getItem=people.find((people)=>{return people.name=="yoyo"})
console.log(getItem);//{name: 'yoyo', age: 75}

people.forEach((people)=>console.log(people.age));

const age25=people.some((people)=>{return people.age==25});
console.log(age25);

const age30=people.every((people)=>{return people.age==30});
console.log(age30);
 */
const number=[1, 2, 3, 4, 5]
const a=[12345];
const sum=number.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
number.concat(a)

console.log(sum)

