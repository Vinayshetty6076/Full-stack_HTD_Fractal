let ar1 = [10,5,20,50,'100'];
console.log("Default ar1 is",ar1);

let ar2 = [...ar1];
console.log("Default ar2 is",ar2);

ar2[1] = 500;

console.log("Default ar1 is",ar1[1]);//5
console.log("Default ar2 is",ar2[1]);//500

let newar1 = [];
for(let ar of ar1){
    newar1.push(ar);
}
console.log(newar1);
ar1[0] = 100;
console.log(newar1);

//--------------------------------
//Rest operator : ...

