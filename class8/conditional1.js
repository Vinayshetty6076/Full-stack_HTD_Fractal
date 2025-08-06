/*
Simple if
if -else
multiple if
nested if
*/

let a = 10;
if (a > 5) {
  console.log("value of a is ", a);
}

let evenNo = 7;
if (evenNo % 2 === 0) {
  console.log(evenNo, " is even");
} else {
  console.log(evenNo, " is odd");
}

let weekDay = "tue";
if (weekDay === "sun") {
  console.log("This is Sunday");
} else if (weekDay === "mon") {
  console.log("This is Monday");
} else if (weekDay === "tue") {
  console.log("This is Tuesday");
} else {
  console.log("Invalid Day");
}

let age = 14;
let gender = "female";
let drink = ["coke", "mocktail", "red wine"];

if (age >= 18) {
  if (gender === "male") {
    console.log(drink[2], " is for you!");
  } else if (gender === "female") {
    console.log(drink[1], " is for you!");
  } else {
    console.log("Invalid data!");
  }
} else {
  console.log(drink[0], " is for you!");
}

function chkWeekDays() {
  let wd = document.getElementById("dayDropDown").value;
  switch (wd) {
    case 'sun': console.log("Sunday is selected"); break;
    case 'mon': console.log("Monday is selected"); break;
    case 'tue': console.log("Tuesday is selected"); break;
    case 'wed': console.log("Wednesday is selected"); break;
    case 'thrus': console.log("Thrusday is selected"); break;
    case 'fri': console.log("Friday is selected"); break;
    case 'sat': console.log("Saturday is selected"); break;
    default: console.log("Invalid Data");
  }
}
