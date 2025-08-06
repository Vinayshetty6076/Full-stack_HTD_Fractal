class MyClass{
    
    static highestNum(a,b,c){
        if(a<b)
            a=b;
        if(a<c)
            a=c;
        return a;
    }

}

let obj = new MyClass();
console.log(MyClass.highestNum(200,60,10));

//--- TypeScript --- 