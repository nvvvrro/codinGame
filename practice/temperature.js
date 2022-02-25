
/* Escriba un programa que imprima la temperatura más cercana a 0 entre los datos de entrada. Si dos números están igualmente cerca de cero, el entero positivo debe considerarse más cercano a cero (por ejemplo, si las temperaturas son -5 y 5, entonces muestra 5).

Input:
Su programa debe leer los datos de la Input estándar y escribir el resultado en la salida estándar.
Aporte

Línea 1:  N, el número de temperaturas a analizar

Línea 2: Una cadena con el N temperaturas expresadas como números enteros que van de -273 a 5526

Output:
Muestra 0 (cero) si no se proporcionan temperaturas. De lo contrario, muestra la temperatura más cercana a 0.*/

const n = parseInt(readline()); 
const temp = readline().split(" ");

if(temp==0) console.log(0)

if (temp) {
  let min = temp[0];

  for (let i = 1; i < temp.length; i++) {
    if (Math.abs(parseInt(temp[i])) < Math.abs(parseInt(min))) {
      min = temp[i];
    } else if (
      Math.abs(parseInt(temp[i])) === Math.abs(parseInt(min)) &&
      temp[i] > min
    ) {
      min = temp[i];
    }
  }
  console.log(min);
} else {
  console.log(0);
}

