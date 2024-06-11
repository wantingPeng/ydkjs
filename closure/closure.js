



//closure is a function having access to the parent scope, even after the parent function has closed

const parentFunction = ()=>{
  let myValue =2;
  let x=1;
  childFunc=()=>{
    console.log(x +=5);
    console.log(myValue +=1);
  }
  return childFunc;
}

const result=parentFunction();
console.log(result);
result();// although the parentfunc has already closed and returned the childfunc to result, then take off..
//when we invok the result , we can still access to let value.
console.log(myValue);//closure.js:17 Uncaught ReferenceError: myValue is not defined
//cause myValue is local scope, cannot be accessed when parentfunc turned off, but can  be accessed by childfunc, when ist excuterd.



//iife https://www.youtube.com/watch?v=8GDk8sj0YgQ&t=56s
/*  console.log((()=>{let counter =0;
    console.log(counter);
    const credits=(mun)=>console.log(`i have ${mun} cerdits`);
    return ()=>{counter++; credits(counter);}
})() )  //()=>{counter++; credits(counter);}



 const increment=(()=>{
  let counter =0;
  console.log(counter);
  const credits=(mun)=>console.log(`i have ${mun} cerdits`);
  return ()=>{counter++; credits(counter);}
})()
// the above func wird only be excuted once, after invoked increment= ()=>{counter++; credits(counter);},
//not the original func any more.

increment();//i have 1 cerdits
increment();//i have 2 cerdits
credits(3);//Uncaught ReferenceError: credits is not defined


console.log((()=>{
let count=0;
return {
  current:()=>{return count},
  increment:()=>{count++},
  reset:()=>{count=0}
}
})()); /*current: ()=>{return count}
increment: ()=>{count++}
reset: ()=>{count=0}
[[Prototype]]: Object 

const Score=(()=>{
  let count=0;
  return {
    current:()=>{return count},
    increment:()=>{count++},
    reset:()=>{count=0}
  }
  })();

  Score.increment();
  console.log(Score.current());
  Score.increment();
  console.log(Score.current()); */