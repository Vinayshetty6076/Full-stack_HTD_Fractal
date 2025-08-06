import {doSum, doSub} from "./utility.js";

console.log(doSum(10,5));
document.getElementById("result").innerHTML = doSum(10,5);
document.getElementById("subtract").innerHTML = doSub(10,5);
