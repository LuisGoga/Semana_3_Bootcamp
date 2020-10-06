//1.Crear un array. Asignar 10 valores diferentes dentro del mismo.
//Mostrar los 10 valores en pantalla.

//Creamos un array con 10 valores
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
​
//Creamos la variable "parrafos" y la igualamos a un string vacio
let parrafos = "";
​
//Hacemos un bucle for para sumarle al string parrafos un string con etiquetas html.
//Las etiquetas HTML de ese string tendrán como contenido el valor que el indice i
//del array tenga en esa vuelta al bucle. Añadiendo así distintos párrafos (en este caso) HTML
//a la variable parrafos
for (let i = 0; i < array.length; i++) {
  parrafos +=  `<p>${array[i]}</p>`;
}
​
//accedemos a document y con el metodo getElementById("nombre del id del elemento al que queremos acceder") accedemos
//al elemento HTML que tenga el id que hemos pasado por parametro.
//igualamos su innerHTML a la variable parrafos. Que contiene los distintos parrafos que hemos creado en el bucle
document.getElementById("div1").innerHTML = parrafos;