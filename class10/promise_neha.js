function getdata() {
    return new Promise((resolve, reject) => {
        const url = "https://jsonplaceholder.typicode.com/todos/1";
        fetch(url)
            .then(response => {
                return response.json();

            })
            .then(data => {
                console.log("Data fetched successfully:", data);
                resolve(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                reject(error);
            });

})
}
getdata()
    .then(result => {
        console.log("Title:", result.title); 
        console.log("Completed:", result.completed); 
    }).catch(error => {
        console.error("Error in promise chain:", error);
    });