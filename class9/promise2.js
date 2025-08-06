function MyFunction(errorFlag){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(errorFlag){
                resolve('Promise Resolved!')
            }else{
                reject('Promise Rejected')
            }
        })
    })
}

let errorFlag = true;
MyFunction(errorFlag).then(function(val){
    console.log("Thank you",val)
}).catch(function(val){
    console.log("Sad to know -",val);
})