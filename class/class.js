  class Pizza{
    chef="hohn";
  #type;//Property '#type' is not accessible outside class 'Pizza' because it has a private identifier.
    #tool='oven';
    constructor(PizzaType,PizzaSize,PizzaCrust){
      this.type=PizzaType;
      this.size=PizzaSize;
      this.crust=PizzaCrust;
      this.topping=[]
    }
    bake(){
      console.log(`baking a ${this.size} ${this.crust} ${this.type} pizza`);
    }
    getCrust(){ 
      return this.crust;
    }
    setCrust(PizzaCrust){   //cannot set propety by dot, revalue outside of the class, its private varible, have to by creating setter in the class to reset the value
      this.crust=PizzaCrust;
    }
    getTopping(){
      return this.topping;
    }
   setTopping(topping){
     this.topping.push(topping)
   }
 }
 console.log()
 const myPizza=new Pizza('pepper','medium','original')

 myPizza.bake();//baking a medium original pepper pizza

 console.log(myPizza.#type);
 console.log(myPizza.#tool);
 console.log(myPizza.chef);


 myPizza.setCrust("mild");
 console.log(myPizza.getCrust());

 myPizza.setTopping("sausage");
 console.log(myPizza.getTopping());


 class publication{
  constructor(booktitle,bookauthor,pubDate){
    this.title=booktitle;
    this.author=bookauthor;
    this.pubDate=pubDate;
  }
  print(){
    console.log(`Titel:${this.title}, By:${this.author}, ${this.pubDate}`)
  }
}

Class Inheritance
 class book extends publication{
   constructor(booktitle,bookauthor,pubDate,text, pattern, sitePage){
     super(
       booktitle,bookauthor,pubDate
     );
     this.text=text;
     this.pattern=pattern;
     this.sitePage=sitePage;
   
   }
   print(){
     console.log(this.pattern);
     super.print();
   }
  }

 const mathBook=new book("ohhhhhh","cici","2024",'1','2','3');

const pub=new publication("omg","cici","2024");
pub.print();
mathBook.print(); 