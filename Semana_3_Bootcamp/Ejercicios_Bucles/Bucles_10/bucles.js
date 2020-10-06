//10.	Realiza un programa que muestre por pantalla los números del 1 al 100
//sin mostrar aquellos números múltiplos de 5.

//declaramos la variable resto y la igualamos a 0
let resto = 0;
​
//el bucle for se va a repetir siempre que i sea menor O igual a 100
for (let i = 1; i <= 100; i++) {

  //a resto le damos el valor del resto que da dividir i / 5
  resto = i % 5;

  //si resto no es igual a 0 (o lo que es lo mismo. Si i no es multiplo de 5)
  //entramos al if
  if (resto !== 0) {

    //sacamos en consola el valor de i
    console.log(i);
  }
}
​
//El CODIGO DE ARRIBA Y EL DE ABAJO HACEN LO MISMO
​
//el bucle for se va a repetir siempre que i sea menor O igual a 100
for (let i = 1; i <= 100; i++) {

  //si el resto de dividir i entre 5 no es 0 (es decir, i no es multiplo de 5)entramos en el if
  if (i % 5 !== 0) {
      
    //sacamos en consola el valor de i
    console.log(i);
  }
}