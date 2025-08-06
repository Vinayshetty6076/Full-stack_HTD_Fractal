fetch("https://api.restful-api.dev/objects").then(async(data)=>{

    let serverData = await data.json();
    let html = '';
    for(let item of serverData){
        html += "<div class='flex-item'>";
        html += "<h3>"+item.name+"</h3>";
        html += "<br />";
        //html += "Color:"+item.data.color;
        html += "</div>";
    }
    //document.getElementById("container").innerHTML = html;
})
.catch((error)=>{
    console.log(error)
})

/*
 - callback
 - promise
 - async await

*/