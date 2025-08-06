function outer() {
  console.log("This is Outer function");
  let a = 10;
  function inner() {
    console.log("This is inner function",a);
  }
  inner();
}

outer();

function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const plus = counter();
console.log(plus());//1
console.log(plus());//2
console.log(plus());//3
