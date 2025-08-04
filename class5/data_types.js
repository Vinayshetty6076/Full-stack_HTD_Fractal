const handleSubmit = () => {
  if (document.getElementById("user_name").value === "") {
    document.getElementById("error_container").innerHTML =
      "<strong>Please enter user name!</strong>";
    document.getElementById("error_container").style.color = "red";
    return false;
  }
};
const checkLength = () => {
  let len = document.getElementById("user_name").value.length;
  //debugger;
  if (len > 10) {
    document.getElementById("error_container").innerHTML =
      "<strong>Length of user name should not more than 10 characters!</strong>";
    document.getElementById("error_container").style.color = "red";
  }
};

let arr1 = [myFunc()];
function myFunc() {
  return 5;
}
console.log(arr1[0]);
console.log(typeof arr1); //Object

let obj1 = {};
console.log(typeof obj1); //object; Class name is Object
console.log(obj1 instanceof Object); //true

function chkDataTypes() {
  let num1 = 10;
  let num2 = 10.5;
  console.log("value of num1 is ", num1, " and value of num2 is ", num2);
  let str = "This is JavaScript";
  console.log(str);
  let flag = true;
  console.log(flag);
  let x = undefined;
  console.log(x);
  let y = null;
  console.log(y);
  //-----------------------------------------------
  let car = {
    color: "red",
    make: "maruti",
    CC: 1200,
    feature: ["automatic gear box", "AC"],
    models: {
      model1: "swift",
      model2: "Celerio",
    },
    func: function () {
      console.log("This is a function inside car object");
    },
  };
  //let obj2 = new Object();
  console.log(car.color); //red
  console.log(car.make); //maruti
  console.log(car.CC); //1200
  console.log(car.feature[1]);
  console.log(car.models.model1);
  console.log(car.func());

  var innerFunc = () => {
    return "This is inner Function";
  };

  let topics = [
    "Html",
    "CSS",
    "JS",
    { key1: "a", key2: "b" },
    ["react", "django"],
    innerFunc(),
  ];
  //let topics2 = new Array()
  console.log(topics[0]);
  console.log(topics[1]);
  console.log(topics[2]);
  console.log(topics[3].key1);
  console.log(topics[3].key2);
  console.log(topics[4][1]);
  console.log(topics[5]);
}
