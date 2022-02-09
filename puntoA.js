//a. Desarrolla un algoritmo que imprima los números del 0 al 100. Adicionalmente debe
// imprimirse en la misma línea la palabra buzz en caso de que el número sea par. Sí el
// número es múltiplo de 5 debe imprimirse en la misma línea la palabra bazz.

let numeros = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    numeros.push(i + 'buzz, bazz');
  } else {
    if (i % 2 == 0) {
      numeros.push(i + 'buzz');
    } else if (i % 5 == 0) {
      numeros.push(i + 'bazz');
    } else {
      numeros.push(i);
    }
  }


}

console.log(numeros);
