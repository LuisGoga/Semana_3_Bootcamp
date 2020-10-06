//2.Crear un array. Pedir al usuario 3 veces que escriba un string.
//Guardar cada uno de esos strings en la posición 0 , 1 y 2. 
//Mostrar en pantalla en el orden: primero posición 1, después posición 2 y por último posición 0.

//Creamos un array vacío
​
let array = [];
//Creamos la variable parrafos y la igualamos a un string vacio
let parrafos = "";
​
//El ejercicio pide que le pidamos 3 strings al usuario. Así que creamos un bucle
//que recorreremos 3 veces.
//Usamos el metodo push para añadir a la ultima posicion del array lo que escriba el usuario en el prompt
for (let i = 0; i < 3; i++) {
  array.push(window.prompt("Escribe 1 string"));
}
​
//sumamos a la variable parrafos los parrafos en el orden que nos pide el ejercicio.
parrafos += `<p>${array[1]}</p>`;
parrafos += `<p>${array[2]}</p>`;
parrafos += `<p>${array[0]}</p>`;
​
document.getElementById("div1").innerHTML = parrafos;