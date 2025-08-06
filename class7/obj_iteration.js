const myObj = {
    name: "Rohit",
    age: 25,
    qualification: "MCA",
    company: "TCS",
    salary: "8LPA"
}

console.log(Object.keys(myObj));

for(let key in myObj){
    console.log("Key:",`${key}`,"and value :",`${myObj[key]}`)
}

