
//6.Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número
//Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial
//en la columna de al lado.

//Declaramos una variable. Y como sabemos que la querremos multiplicar, le damos el valor de 1
let suma = 1;
​
//hacemos un bucle for. Este bucle se repetirá hasta que i sea mayor que 10
for (let i = 1; i <= 10; i++) {

//multiplicamos suma * i
suma = suma * i;

//Sacamos en consola el resultado
console.log(`${i} es ${suma}`);

}



