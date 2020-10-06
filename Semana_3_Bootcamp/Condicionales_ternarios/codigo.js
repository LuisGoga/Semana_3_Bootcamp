
/*
//El usuario tiene dos hijos.
//Pregúntale la edad del mayor y los años de diferencia entre el mayor y el menor.
//Muestra en pantalla si el menor es mayor de edad o no.

let Hmayor = 15;
let Hmenor = 5;
let edad = (Hmenor + Hmayor);

(edad >= 18) ? console.log("Es mayor de edad el hermano menor") : console.log("No es mayor de edad el hermano menor");



//Escribe un programa que evalúe si un string contiene la letra ‘r’ 
//(pista:usar función de string).

let letrar =window.prompt('Escribe una palabra');

console.log(letrar.indexOf('r'));


//A partir de un valor de número entero, mostrar el valor absoluto.
//Por ejemplo si se introduce un -7 mostrar el mensaje "El valor absoluto de -7 es 7".
//Si es positivo o cero mostrar ese mismo valor.



let num = parseInt(window.prompt('Introduce un número'));

if(num = 0 || num + '-' ){
    window.alert(num);

}else if(num = num || 0 ){
    window.alert(num)


}



//Escribe un programa el cual analizará si la contraseña introducida es correcta o no.
//Para que la contraseña sea correcta deberá cumplir estas directivas:
//Debe tener 8 caracteres como mínimo.


let contraseña =window.prompt('Introduce tu contraseña');
let intentelOtraVez ='Inténtelo de nuevo';

contraseña1= 8;

if(contraseña.length == contraseña1){
    
    
window.alert("Tu contraseña es correcta");
}

else window.alert("Inténtelo de nuevo");{

}



//Haz uno de los ejercicios de condicionales sencillos usando un condicional ternario.

//Pide por teclado la edad del usuario. Si la edad es igual o inferior a 8 mostramos el mensaje
//"Pasa al tobogán", si no mostramos "Eres demasiado mayor para usar el tobogán".

let edad =parseInt(window.prompt('Introduce tu edad'));

let mensaje1= 'Pasa al tobogán'; 
let mensaje2= 'Eres demasiado mayor para usar el tobogán'; 


if(edad <= 8 ? "Pasa al tobogán" : "Eres demasiado mayor para usar el tobogán"  ){
    
    
window.alert(mensaje1);
}

else window.alert(mensaje2);{

}



//Haz uno de los ejercicios de condicionales sencillos usando un condicional ternario.

//Pide por teclado la edad del usuario. Si la edad es igual o inferior a 8 mostramos el mensaje
//"Pasa al tobogán", si no mostramos "Eres demasiado mayor para usar el tobogán".

let edad =parseInt(window.prompt('Introduce tu edad'));

let pasocolumpio=edad <= 8 ? "Pasa al tobogán" : "Eres demasiado mayor para usar el tobogán" ;

window.alert(pasocolumpio);

*/

//En una clase tienes tres exámenes, con un valor de 5 puntos máximo en cada uno.
//La nota final es la mejor nota de los dos primeros exámenes más la nota del tercer examen.
//Crea un programa que con tres notas calcula el resultado de nota final con los siguientes rangos:

//10 es matrícula
//9 y hasta 10 es sobresaliente
//7 y hasta 9 es notable
//6 y hasta 7 es bien
//5 y hasta 6 es suficiente
//0 hasta 5 es suspenso


let nota =parseFloat(window.prompt('Introduce tu nota del examen'));

if(nota = 9 && nota < 10 ){

  window.alert("Sobresaliente");

}else if(nota = 7 && nota <=9 ){

  window.alert("Notable");

}else if(nota = 6 && nota <= 7 ){

  window.alert("bien");

}else if(nota = 5 && nota <=6 ){

window.alert("Bien")

}else if(nota = 0 && nota <5 ){

window.alert("Suspendido");

}else if(nota = 10){

window.alert("Marícula de honor");

}if(nota < 0 || nota > 10 ){

window.alert("El dato introducido no es válido");
}




        














