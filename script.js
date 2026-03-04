console.log("Script started")

function changeStyle() {
    console.log("click");

    //Get the p element and stor it in a variable
    let p = document.getElementById("text");
    p.innerText = "The text has been changed";

    //Set some styles
    p.style.color = "pink";
    p.style.fontSize ="60px";
    p.style.textAlign = "center";
    p.style.backgroundColor = "grey";
}