function getpercentage(){
    let Maths = +document.getElementById("Maths").value;
    let SKT = +document.getElementById("SKT").value;
    let German = +document.getElementById("German").value;
    let SST = +document.getElementById("SST").value;
    let Science = +document.getElementById("Science").value;
    let English = +document.getElementById("English").value;
    let obtainedmarks = Maths + SKT + German + SST + Science + English;
    let persubmarks = 100;
    let totalmarks = persubmarks*6;
    let percentage = (obtainedmarks/totalmarks)*100;
    console.log(percentage);
}

