class User{
   constructor(name,email){
    this.name = name;
    this.email = email;
   } 
   displayData(){
    console.log("Name is ",this.name," and email is",this.email);
   }
}
class Customer extends User{
    constructor(name,email){
        super(name,email);
    }
}
class MyClass extends Customer{
    constructor(name,email){
        super(name,email);
    }
}

//let obj = new User('Raj','raj@me.in')
//obj.displayData();

//let customer1 = new Customer('Raj','raj@me.in');
//customer1.displayData();

let obj = new MyClass('Raj','raj@me.in');
obj.displayData()

