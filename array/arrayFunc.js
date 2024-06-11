/* function sum1(a,b){
  return a + b ;
}
let sum11 =(a,b)=>{ return a +b;}
//we can reduce it further
let sum12= (a,b)=>a+b;

let goPlay=(number)=>number>0;
//we can reduce it further
let goPlay2=number=>number>0;

let randomNumber=()=>Math.random;

//the array Function really shein at creating anonymous func and taking another func as paremeter
document.addEventListener("click", function(){console.log("click")})
document.addEventListener("click", ()=>{console.log("click")})
 */


class person{
  constructor(name){
    this.name=name
  }


printNameArrow(){
  setTimeout(()=>console.log("arrow"+ this.name),100)
}

printNameFunction(){
  setTimeout(function(){console.log("function"+ this.name)},100)
}
}
let person1=new person("CICI");
person1.printNameArrow();
person1.printNameFunction();
