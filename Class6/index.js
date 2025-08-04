function ArrayOfObj(){
    const prodData = [
        {
            prodId:1,
            prodName: "Samsung M52",
            prodDesc: "some fake description...some fake description...some fake description...",
            prodPrice: 24000
        },
        {
            prodId:1,
            prodName: "IPhone 15",
            prodDesc: "some fake description...some fake description...some fake description...",
            prodPrice: 74000
        },
        {
            prodId:1,
            prodName: "Xiomi",
            prodDesc: "some fake description...some fake description...some fake description...",
            prodPrice: 15000
        },
        {
            prodId:1,
            prodName: "One Plus",
            prodDesc: "some fake description...some fake description...some fake description...",
            prodPrice: 45000
        },
        {
            prodId:1,
            prodName: "Nokia -XYZ",
            prodDesc: "some fake description...some fake description...some fake description...",
            prodPrice: 20000
        }
    ]
    let html = '';
    for(let prod of prodData){
        html += "<div class='flex-item'>";
        html += "<h3>"+prod.prodName+"</h3>";
        html += "<br />";
        html += "Price:"+prod.prodPrice;
        html += "</div>";
    }
    document.getElementById("container").innerHTML = html;

}
ArrayOfObj();