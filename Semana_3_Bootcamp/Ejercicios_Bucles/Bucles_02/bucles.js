

//2.Crear un programa que muestre el valor de sumar todos los números desde 1,
//hasta el número que introduzca el usuario.
//Por ejemplo si introduce el 8 debería mostrar 36 (1 + 2+ 3+ 4+ 5+ 6+ 7+ 8).


//Ejercicio realizado mediante "While".

 let numero= parseInt(window.prompt("Escribe un número"));

 let contador = 1;

 let suma= 0;

 while(contador < numero){
     suma = suma + contador;
     contador ++;
     console.log(suma);
 }

//Ejercicio realizado mediante "for".

for (let i=1 ; i<numero; i++){suma = suma +i;
console.log(suma);
}

