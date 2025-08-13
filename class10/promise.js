console.log("Start");

function waitAndPrint(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve(); 
    }, delay);
  });
}

waitAndPrint("step1", 1000)
  .then(() => waitAndPrint("step2", 1000))
  .then(() => waitAndPrint("step3", 1000))
  .then(() => waitAndPrint("step4", 1000));
