setTimeout(function () {
  console.log("I am inside setTimeout");//execute second
}, 2000);

console.log("I am outside of setTimeout");//Execute first


//Synchronous  --- Asynchronous
//1) callback function
//2) Promise
//3) async await