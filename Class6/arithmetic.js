function validation(action) {
    //Write code to check blank validation

  let firstNum = parseInt(document.getElementById("first_num").value);
  let secondNum = parseInt(document.getElementById("second_num").value);
  performAction(firstNum, secondNum, action);
}

function performAction(firstNum, secondNum, action) {
  if (action === "add") {
    document.getElementById("result_container").innerHTML =
      firstNum + secondNum;
  } else if (action === "sub") {
    document.getElementById("result_container").innerHTML =
      firstNum - secondNum;
  } else if (action === "multiply") {
    document.getElementById("result_container").innerHTML =
      firstNum * secondNum;
  } else {
    document.getElementById("result_container").innerHTML =
      "Error! Something wrong!!!";
  }
}
function abc(){
    return 2+3;
}
