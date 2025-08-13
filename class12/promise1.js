const promiseResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task Completed");
  }, 2000);
});

promiseResolve.then((res) => {
  document.querySelector("#promise1_container").innerHTML =
    "<h1 class='text-success'>" + res + "</h1>";
});
//------------------------------------------------------

const promiseReject = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject("Task Failed!");
  }, 2000);
});

promiseReject.catch((res) => {
  document.querySelector("#promise2_container").innerHTML =
    "<h1 class='text-danger'>" + res + "</h1>";
});
//------------------------------------------------------

const promiseObj = new Promise((resolve,reject)=>{
    var random_bool = Math.random() < 0.5;
    setTimeout(function(){
        if(random_bool){
            resolve("Task Completed Successfully!")
        }else{
            reject("Error! During Execution")
        }
    },2000)
})

promiseObj.then((result)=>{
    document.querySelector("#promise3_container").innerHTML= "<h1 class='text-success'>"+result+"</h1>"
}).catch((result)=>{
    document.querySelector("#promise3_container").innerHTML= "<h1 class='text-danger'>"+result+"</h1>"
}).finally(()=>{
    console.log("Finshed Prog.")
})