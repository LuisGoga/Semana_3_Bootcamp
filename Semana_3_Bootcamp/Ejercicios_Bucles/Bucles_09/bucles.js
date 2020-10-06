
//9.Escribe un programa que muestre los números de 1 a 12 en una columna.
//En la columna de al lado de los números impares mostrar el cuadrado de ese valor
//y en la de los pares mostrar el cubo.

//el bucle for se repetirá mientras i sea menor que 13
//ya que i empieza con el valor 1, la condición es que i sea menor que 13 (osea, 12 máximo)
//y el ejercicio nos pide que saquemos 12 números con su cubo si es par y su cuadrado si es impar
for (let i = 1; i < 13; i++) {

    //si el resto de dividir i / 2 no es 0 entramos en el if ya que i es impar
    if (i % 2 !== 0) {

      //sacamos en consola el resultado
      console.log(`El cuadrado de ${i} es ${i * i}`);
      
      //si el resto de dividir i / 2 es 0 entramos en el else ya que i es par
    } else {
      //sacamos el resultado en la consola
      console.log(`El cubo de ${i} es igual a ${i * i * i}`);
    }
  }