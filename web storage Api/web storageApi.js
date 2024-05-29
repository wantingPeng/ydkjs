const vehicle={
  wheels:4,
  engine: function(){
    return 'hongggggg';
  }
};

localStorage.setItem("myLocalStoragre",JSON.stringify(vehicle));
const key = localStorage.key(0);
console.log(key);
const myLocalData=JSON.parse(localStorage.getItem("myLocalStoragre"))
console.log(myLocalData);