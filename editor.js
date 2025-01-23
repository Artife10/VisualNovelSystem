let linesx = [];
let imgsx = [];

function importold() {
    linesx = [];
    imgsx = [];
    linesx = linesx.concat("'"+lines.join("','")+ "'");
    imgsx = imgsx.concat("'"+imgs.join("','")+ "'");
    alert(linesx);
    document.getElementById("output").innerText = "const lines = ["+ linesx + "];"+"\n"+"const imgs = ["+ imgsx + "];";
}

function submit() {
    if (document.getElementById("textbox").value != "" && document.getElementById("imgbox").value != "") {
        linesx.push("'"+document.getElementById("textbox").value+"'");
        imgsx.push("'"+document.getElementById("imgbox").value+"'");


        document.getElementById("output").innerText = "const lines = ["+ linesx + "];"+"\n"+"const imgs = ["+ imgsx + "];";
    }
    else{
        alert("Fill both ty");
    }
}