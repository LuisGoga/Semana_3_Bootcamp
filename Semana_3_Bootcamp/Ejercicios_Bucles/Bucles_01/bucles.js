

//Escribe un programa que pregunte al usuario su edad.
//Mostrar en pantalla “Feliz cumpleaños” repetido tantas veces como años tenga.

let anyos= parseInt(window.prompt("Escribe tu edad"))
window.alert(anyos);

//ejercicio hecho mediante "While";

let i= 0

while (i < anyos){
    console.log("Feliz cumpleaños"); i++;
}

//ejercicio hecho mediante "do / while";

let j= 0;

do{

    console.log("Feliz cumpleaños")
    j++

}while(j < anyos);

//ejercicio hecho mediante "for";


for(let i= 0; i < anyos; i++){
    console.log("Feliz cumpleaños");
}



