
//8.Escribe un programa que muestre todos los valores pares o impares entre 1 y 100
//dependiendo de si el usuario introduce P o I . Si introduce otra cosa,
//decir que ese valor no es correcto y pedirle otra vez.

//le decimos al usuario que introduzca P o I y lo guardamos en una variable
let valor = window.prompt("Escribe P o I").toLowerCase();

//creamos la variable num y le damos el valor 0
let num = 0;
​
//el bucle while se repetirá mientras valor no sea ni "p" ni "i"
while (valor !== "p" && valor !== "i") {

  //al no ser valor igual a p ni a i
  //sacamos otro prompt diciendo que el valor es incorrecto y que vuelva a seleccionar
  //igualamos valor a lo que introduzca el usuario
  valor = window
    .prompt("Ese valor es incorrecto. Seleccione de nuevo P o I")
    .toLowerCase();
}
​
//si valor es "p"
if (valor === "p") {
  num = 2;
  
  //si valor es "i"
} else if (valor === "i") {
  num = 1;
}
//el bucle for se repetirá mientras i sea menor a 51
for (let i = 1; i < 51; i++) {
  //sacamos en consola el valor de num
  console.log(num);
  //y depués le sumamos 2 a num.
  num = num + 2;
}



