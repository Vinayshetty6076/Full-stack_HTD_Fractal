const p1 = Promise.reject("Task 1");
const p2 = Promise.reject("Task 2");
const p3 = Promise.reject("Task 3");

//Promise.all() - if any promise fails, .catch() is triggered & all result is discarded
Promise.all([p1, p2, p3])
  .then((result) => {
    console.log("Resolve Block:", result);
  })
  .catch((error) => {
    console.log("Reject Block:", error);
  });

//Promise.allSettled() - wait for all promises to complete.
Promise.allSettled([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//Promise.any() -
Promise.any([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


//Promise.race() -

const api1 = new Promise(response => setTimeout(()=>{
    response("API1 wins")
},3000))
const api2 = new Promise(response => setTimeout(()=>{
    response("API2 wins")
},2000))

Promise.race([api1,api2]).then(res => console.log(res));