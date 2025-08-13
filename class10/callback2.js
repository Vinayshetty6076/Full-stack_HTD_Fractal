let ar = [5,6,12,3,20];
let sum = 0;

function doAdd(callback){
    for(let el of ar){
        sum +=el;
    }
    console.log("Sum is",sum);
    setTimeout(callback,1000);
    console.log("End");
}

function avg(){
    console.log("Average is ",sum/ar.length);
}
function xyz(){
    console.log("Any data");
}

doAdd(avg);
doAdd(xyz);