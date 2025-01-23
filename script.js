let index = 0;

function LoadFirst(){
    document.getElementById("text").innerText = lines[0];
    document.getElementById("char").innerHTML = "<img src='"+imgs[0]+"' alt='cig'>"
}

function NextLine() {
    if (index > lines.length-2) {
        index = 0;
        document.getElementById("text").innerText = lines[index];
        document.getElementById("char").innerHTML = "<img src='"+imgs[index]+"' alt='cig'>"
    }
    else{
        index++;
        document.getElementById("text").innerText = lines[index];
        document.getElementById("char").innerHTML = "<img src='"+imgs[index]+"' alt='cig'>"
    }
}