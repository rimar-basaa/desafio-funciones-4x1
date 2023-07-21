// Cambiar colores de cuadrado a Negro
const box1 = document.querySelector("#box1");
box1.addEventListener("click",() => box1.style.backgroundColor = "black");

const box2 = document.querySelector("#box2");
box2.addEventListener("click",() => box2.style.backgroundColor = "black");

const box3 = document.querySelector("#box3");
box3.addEventListener("click",() => box3.style.backgroundColor = "black");

const box4 = document.querySelector("#box4");
box4.addEventListener("click",() => box4.style.backgroundColor = "black");


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


const key = document.querySelector('#key');
const key1 = document.querySelector('#key1');
const container = document.querySelector("#container");

document.addEventListener("keydown", function(event){
    
    //validacion minuscula/mayuscula y modificacion color teclas a-A s-S d-D
    if (event.key === "a" || event.key === "A"){
        key.style.backgroundColor = "pink";                
    } else if (event.key === "s" || event.key === "S"){
        key.style.backgroundColor = "orange";
    } else if (event.key === "d" || event.key === "D"){
        key.style.backgroundColor = "lightblue";
    }
    
    //validacion existencia cuadrado key1
    if (event.key == "q" || event.key == "Q" || event.key == "w" || event.key == "W" || event.key == "e" || event.key == "E"){
        if (document.getElementById("key1") !== null) {
            pintaKey1(event.key);
        } else {
            container.insertAdjacentHTML("beforeend", "<div id='key1' style='width: 200px; height: 200px; border: 1px solid black;' class='box'>Key1</div>");
            pintaKey1(event.key);
        }
    } 

    //modificacion color cuadrado key1 con teclas q-Q w-W e-E
    function pintaKey1(key) {
        const key1 = document.querySelector("#key1");
        if (key == "q" || key == "Q"){
            key1.style.backgroundColor = "yellow";
        } else if (key == "w" || key == "W"){
            key1.style.backgroundColor = "blue";
        } else if (key == "e" || key == "E"){
            key1.style.backgroundColor = "brown";
        }        
    }    
})
