class User{
   constructor(name,email){
    this.name = name;
    this.email = email;
   } 
   displayData(){
    console.log("Name is ",this.name," and email is",this.email);
   }
}

let obj = new User('Raj','raj@me.in')
obj.displayData();

console.log(typeof User); //function