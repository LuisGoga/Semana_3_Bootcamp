//6.Crear un array. 
//Usar un for para pedir 3 valores al usuario y guardarlos en el mismo. 
//Comparar los 3 valores del array y mostrar en pantalla el más pequeño.

//declaramos un array vacio
​
let array = [];
​
let div1 = document.getElementById("div1");
​
//le pedimos 3 veces al usuario que nos de un valor. Con el push, lo metemos en el array cada vez que nos lo de
for (let i = 0; i < 3; i++) {
  array.push(window.prompt("Escribe un valor"));
}
​
//si el indice 0 del array es menor que el indice 1 y que el indice 2
if (array[0] < array[1] && array[0] < array[2]) {
  //sacamos en pantalla un párrafo con el indice 0 del array. Porque es el menor de los 3
  div1.innerHTML = `<p>${array[0]}</p>`;
  //si el indice 1 del array es menor que el indice 0 y que el  indice 2
} else if (array[1] < array[0] && array[1] < array[2]) {
  //sacamos en pantalla un párrafo con el indice 1 del array. Porque es el menor de los 3
  div1.innerHTML = `<p>${array[1]}</p>`;
  //si ninguno de los 2 anteriores es el menor de los 3 solo puede ser el indice 2 el menor
} else {
  //sacamos en pantalla un párrafo con el indice 2 del array. Porque es el menor de los 3
  div1.innerHTML = `<p>${array[2]}</p>`;
}
