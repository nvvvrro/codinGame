/*Al comienzo de cada turno de juego , se le indica la altura de las 8 montañas de izquierda a derecha.
Al final del turno de juego , debes disparar a la montaña más alta mostrando su índice (de 0 a 7).

Disparar a una montaña solo destruirá una parte de ella, reduciendo su altura. Su barco desciende después de cada pasada.

Input:
Dentro de un ciclo infinito, lea las alturas de las montañas desde la Input estándar e imprima en la salida estándar el índice de la montaña para fotografiar.

Input para un turno de juego
líneas 8: un enteromontañaHpor línea. Cada uno representa la altura de una montaña dada en el orden de su índice (de 0 a 7).

Output para un turno de juego
Una sola línea con un número entero para el índice de qué montaña fotografiar.
Restricciones   */

while (true) {
  let heightM = 0;
  let mountainIndex = 0;

  for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline());
    if (mountainH > heightM) {
      heightM = mountainH;
      mountainIndex = i;
    }
  }
  console.log(mountainIndex);
}
