
function studInfo(...ei){
    console.log(this.id); 
    console.log(this.name);
    console.log(ei[0]);//15
    console.log(ei[1]);//110
}


let student1 = {
    id: 1,
    name: "john"
}

studInfo.apply(student1,[15,101])