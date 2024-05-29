
//obejects: key-value pairs in curly braces
//example 1
const myObject={
  time:4,
  wheather: "rainy",
  temperature:20,
  behaviour:{
      morning:'coffee',
      afternoon:'swiming'
  },
  action: function(){
    return `time for ${this.behaviour.morning}`;
  }
};
console.log(myObject.action)
//example 2
const vehicle={
  wheels:4,
  engine: function(){
    return 'hongggggg';
  }
};
const truck=Object.create(vehicle);//Inheritance
truck.doors=2;//add
delete truck.wheels;
console.log(truck);//{doors:2}
console.log(truck.wheels);//4
console.log(truck.engine());//hongggggg
const car =Object.create(vehicle);
car.doors=4;
car.engine=function(){return 'whoooooooo';};
console.log(car.engine());//whoooooooo
console.log(Object.keys(car));
console.log(Object.values(car));

//example 3

const band={
  vocal:"robert",
  guitar:"jimmy",
  bass:"john",
  drum:"cici"
};
console.log(Object.keys(band));//(4) ['vocal', 'guitar', 'bass', 'drum']

console.log(Object.values(band));//['robert', 'jimmy', 'john', 'cici']

for (let job in band){
  console.log(`on ${job}, its ${band[job]}!`);
}

delete band.bass;
//destructuring objects
function sing({ vocal}){return `${vocal} sing!`;}
console.log(sing(band))//robert sing!

const {vocal,guitar,bass}=band;//vocal=robert, guiter=jimmy, bass=john
console.log(guitar); //jimmy.    name the variable jimmy after guiter>>>>

