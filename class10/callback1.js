function greet(user){
    console.log("Good Morning!",user.name)
}

function toDos(){
    console.log("This is my todo list--")
    console.log("1) Need to work in client1 project\n 2) Meeting with client2")
}

let userDataFromServer = {name:"john"}
setTimeout(greet,2000,userDataFromServer);
toDos();//Execute first