

let array = [1, 2, 3, 5];
//Creamos un string vacío para poder sumarle los strings que crearemos en el bucle
let parrafos = "";
​
for (let i = 0; i < array.length; i++) {
	//parrafos es igual a parrafos + string con etiquetas html y el contenido de las etiquetas
	//será un indice del array en cada vuelta del bucle.
	//Así creamos un párrafo por cada indice del array
  parrafos += `<p>${array[i]}</p>`;
}
​
//igualamos el innerHTML del div con id "div1" a la variable parrafos que contiene los distintos parrafos
document.getElementById("div1").innerHTML = parrafos;