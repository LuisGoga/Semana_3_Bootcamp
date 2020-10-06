
//5.Escribe un programa que muestre el resultado de sumar todos los números
//del 1 hasta el número introducido y que vuelva a pedirle al usuario otro número
//hasta que el usuario introduzca un 0.

let suma= 0;
let num;

do  {
     num= parseInt(window.prompt("Escribe un número"));
for(let i = 1; i < num; i++);{

    suma= suma +1;
    console.log(suma);
}
}while(num !== 0);




