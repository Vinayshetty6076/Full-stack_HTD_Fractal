const handleDiv = (pointerFlag) => {
  if (pointerFlag) {
    document.getElementById("my_div1").style.background = "#93f179ff";
    document.getElementById("my_div1").style.boxShadow = "10px 20px #b9b2b2ff";
    document.getElementById("my_div1").style.color = "yellow";

  } else {
    document.getElementById("my_div1").style.background = "#FFF";
    document.getElementById("my_div1").style.boxShadow = "";
    document.getElementById("my_div1").style.color = "black";

  }
};
