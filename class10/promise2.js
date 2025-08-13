function getData() {
  return new Promise((resolve, reject) => {
    const url = "https://jsonplaceholder.typicode.com/todos/2";

    //Make API call using fetch()
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject("Fetch Error:", error);
      });
  });
}

getData()
.then((result)=>{
    console.log("Title:",result.title);
    console.log("Completed:",result.completed)
})
.catch((error)=>{
    console.log("Error:",error);
})
