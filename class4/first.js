//Type: Named Function
function appendData() {
  //window.alert("Hello world");
  document.getElementById("first_div").innerHTML =
    "<strong>Hello World!</strong>";
}

//Type: Anonymous function
//var, let, const

let divData = function () {
  document.getElementById("second_div").innerHTML =
    "<strong>Hello World!!!</strong>";
};

//Here divData is called function expression.

//Arrow function
let divdata2 = () =>
  (document.getElementById("second_div").innerHTML =
    "<strong>Hello World!!!</strong>");

let captureTxt = function (t) {
  document.getElementById("second_div").innerHTML = t.value;
};

function frmSubmit() {
  alert("Form is submitted!");
}

let bodyLoad = () => {
  alert("HTML Body is loaded");
};

function someAnimation(flag) {
  if (flag) {
    document.getElementById("first_div").innerHTML =
      "Mouse pointer is on top of div1";
  }else{
    document.getElementById("first_div").innerHTML =
      "";
  }
}
