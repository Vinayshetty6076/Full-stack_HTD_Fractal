function sum(a,b,c){
    return a+b+c;
}

const doSum = function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(doSum(5)(4)(6));