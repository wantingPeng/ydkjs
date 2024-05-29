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
console.log(myObject)

const sendJSON=JSON.stringify(myObject);
console.log(sendJSON);
console.log(typeof sendJSON);

const receivedJSON=JSON.parse(sendJSON);
console.log(receivedJSON);