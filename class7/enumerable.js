const myObj = {
    name: "Rohit",
    age: 25,
    qualification: "MCA",
    company: "TCS",
    salary: "8LPA"
}

console.log(Object.keys(myObj));
console.log(Object.keys(myObj).length);

Object.defineProperty(myObj,"name",{
    enumerable: false
})
console.log(Object.keys(myObj));


Object.defineProperty(myObj,"qualification",{
    writable: false
})
myObj.qualification = "Btech";
console.log(myObj);


Object.defineProperty(myObj,"company",{
    configurable: false
})

delete myObj.company;//not working
delete myObj.salary; // deleted

console.log(myObj);






