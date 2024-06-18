/* const myPromise=new Promise((resolve,reject)=>{
  const error=true;
  if (!error){
    resolve("yes! i resolved the problem")
  }
  else{
    reject('no！rejected the promise')
  }
})

console.log(myPromise)

myPromise
.then(value=>console.log(value))

myPromise.then(value=>{
  return value+', promise Chain'
}).then(value_2=>{
  console.log(value_2)
}).catch(message=>console.log(message))
// const error=true;
 */

//example-2

const user=fetch('https://jsonplaceholder.typicode.com/users')
.then(Response=>{
  console.log(Response)
})
/*   return Response.json();
}).then(date=>{
  date.forEach(element => {console.log(element);
    
  });
}) */