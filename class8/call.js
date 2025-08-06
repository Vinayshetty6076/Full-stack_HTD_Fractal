/*
call() is a inbuild function in JS, which inject an object to a method.
we can also pass optional parameters with call() to our target function.
*/

function studInfo(age){
    console.log(this.id); //1
    console.log(this.name);//john
    console.log(age);
}

let student1 = {
    id: 1,
    name: "john"
}
studInfo.call(student1,16)
let student2 = {
    id: 2,
    name: "smith"
}
studInfo.call(student2,17)
