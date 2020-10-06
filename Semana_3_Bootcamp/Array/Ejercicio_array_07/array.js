//7.Haz un programa que realice la media de los valores que contiene un array de 10 números
//y lo muestre por consola. No es necesario pedir los números al usuario. 

//Creamos un array con 10 valores numericos
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//declaramos la variable total y le damos el valor 0
let total = 0;
//declaramos la variable media vacia
let media;
​
//recorremos el array desde el indice 0 hasta el ultimo
for (let i = 0; i < array.length; i++) {
  //total es igual a total más el número que haya en el indice del array. (si es la primera vuelta, el 0, si es la segunda el 1 etc)
  total += array[i];
}
​
//igualamos la variable media a total (que ya será la suma de todos los numeros del array) entre la longitud del array
media = total / array.length;
​
//sacamos en pantalla la variable media
document.getElementById("div1").innerHTML = media;
