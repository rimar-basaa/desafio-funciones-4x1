// -----------------------------------------Script ORIGINAL
/* function pintar() {
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = "yellow"    
}

ele = document.getElementById("ele1")
ele.addEventListener("click", pintar); */


//----------------------------------------- modificado


function pintar(color = "green") {
    ele.style.backgroundColor = color;    
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar("yellow"));
