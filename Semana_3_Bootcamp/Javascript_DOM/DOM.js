/*
//1.- Crea un título y un párrafo en un archivo js y haz que aparezcan en pantalla.

//let div1= document.getElementById("div1");
//let titulo= DOM;
//div1.innerHTML=`<p>Este es el primer ejercicio del ${titulo}</p>`;

//2.- Crea una variable con tu nombre. Después haz un párrafo que diga “Hola, me llamo (tu nombre)”.

let nombre= document.getElementById("nombre").innerHTML
let tuNombre= Luis;
nombre.innerHTML=`<p>Este es tu nombre de pila ${tuNombre}</p>`;



//3.-Crea un programa que te pida un nombre y una edad.
//Si la edad es menor a 18 años mostrar en pantalla “Hola (nombre), eres menor de edad.”
//Si es mayor mostrar en pantalla “Hola (nombre), eres mayor de edad.”.
//Hacedlo con  if, switch y condicional ternario.

//Condicional If

let nombre1 = window.prompt('Introduce tu nombre');
let edad1 = parseInt(window.prompt('Introduce tu edad'));

if(edad1 < 18){

  window.alert(`Hola ${nombre1} eres menor de edad`);

}else if(edad1 >= 18){

  window.alert(`Hola ${nombre1} eres mayor de edad`);

}

//Condicional switch

let nombre1 = window.prompt('Introduce tu nombre');
let edad1 = parseInt(window.prompt('Introduce tu edad'));

switch (edad1){

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
  
   window.alert(`Hola ${nombre1} eres menor de edad`);
   break;

   case 18:

   window.alert(`Hola ${nombre1} eres mayor de edad`);
   break;


}

//Condicional ternarios

let nombre1 = window.prompt('Introduce tu nombre');
let edad1 = parseInt(window.prompt('Introduce tu edad'));

if (edad1= 18 || edad1 > 18 ){

 
  
   window.alert(`Hola ${nombre1} eres mayor de edad`);
   
}else if(edad1 < 18){
   

   window.alert(`Hola ${nombre1} eres menor de edad`);


*/


//4.- Lo mismo que en el ejercicio 3.
//Pero si es menor de edad que el mensaje sea rojo y si es mayor de edad que el mensaje sea verde.

//Condicional If

let nombre1 = Luis;
let edad1 = 13;
let mayorEdad = document.getElementById("mayorEdad")

mayorEdad.innerHTML


if(edad1 < 18){

  mayorEdad.innerHTML=<p>`Hola ${nombre1} eres menor de edad`</p>;
  console.log(<p>`Hola ${nombre1} eres menor de edad`</p>);

}else if(edad1 >= 18){

  mayorEdad.innerHTML=<p>`Hola ${nombre1} eres mayor de edad`</p>;
  console.log(<p>`Hola ${nombre1} eres mayor de edad`</p>);

}


/*

//Condicional switch

let nombre1 = window.prompt('Introduce tu nombre');
let edad1 = parseInt(window.prompt('Introduce tu edad'));

switch (edad1){

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
  
   window.alert(`Hola ${nombre1} eres menor de edad`);
   break;

   case 18:

   window.alert(`Hola ${nombre1} eres mayor de edad`);
   break;


}

//Condicional ternarios

let nombre1 = window.prompt('Introduce tu nombre');
let edad1 = parseInt(window.prompt('Introduce tu edad'));

if (edad1= 18 || edad1 > 18 ){

 
  
   window.alert(`Hola ${nombre1} eres mayor de edad`);
   
}else if(edad1 < 18){
   

   window.alert(`Hola ${nombre1} eres menor de edad`);


}


*/

