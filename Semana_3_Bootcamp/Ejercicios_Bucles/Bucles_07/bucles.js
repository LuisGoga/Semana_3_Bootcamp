
//7.Escribe un programa que pida valores.
//Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores
//negativos.Seguir pidiendo hasta que el usuario introduzca un 0, 
//entonces mostrar la suma de los valores introducidos. 

//declaramos la variable valor. Al no asignarle ningun valor será undefined en vez de 0 la primera vez que pase por el bucle while
​
let valor;
​
//declaramos la variable sumaValores y le damos el valor de 0
let sumaValores = 0;
​
//El bucle while se repetirá mientras valor sea diferente a 0
while (valor !== 0) {

  //igualamos valor a lo que introduzca el usuario
  valor = parseInt(window.prompt("Escribe un número"));

  //si valor es menor a 0 entramos en el if
  if (valor < 0) {

    //y sacamos en consola que el número es negativo
    console.log("Es un número negativo");
​
    //si el valor no es menor a 0 entramos en el else
  } else {
      
    //sumaValores es igual a sumaValores + valor (introducido por el usuario)
    sumaValores = sumaValores + valor;
  }
}
​
//Sacamos en consola el resultado
console.log(`La suma es ${sumaValores}`);



