// ARREGLO/ARRAY
// Se añaden en [] separando con ,
const myArray = ["perro", "gato", "canario", 2]
console.log(myArray);

// ARRAY ANIDADOS O MULTIDEMENCIONAL
// Podemos incluir arreglos dentro de otros, usando []
const myArrayM = [["Primero", "A", 23], ["Primero", "B", 25]];
console.log(myArrayM);

//ACCEDER DATOS DENTRO DE UN ARRAY
const calificaciones = [15, 17, 16, 20];
const calificacionMayor = calificaciones[3];
console.log(calificacionMayor);

// CAMBIAR LOS VALORES DE UNA ARRAY
const califBim = [14, 16, 18, 20];
califBim[3] = 14;

console.log(califBim);

// ACCEDER A VALORES MULTIDIMENCIONALES
const notas = [
  [15, 14, 16],
  [16, 15, 18],
  [[12, 13, 20], 19, 18],
  [14, 18, 19]
];
// Debemos ubicar el arreglo usando [] sin separarlos
//const notaMayor = notas[2]; nos dará [[12, 13, 20], 19, 18]
//const notaMayor = notas[2][0]; nos dará [12, 13, 20]
const notaMayor = notas[2][0][2]; // 20
console.log(notaMayor);

// AGREGAR VALORES A UN ARRAY CON PUSH
const notasFinales = [15, 16];
// podemos agregar valores, incluso separandolos por ,
notasFinales.push(17, 16)
// tambien podemos agregar array, y hacer un arreglo multidimensional
notasFinales.push([15, 18, 19, 15]);
console.log(notasFinales);

// MANIPULAR ARREGLOS CON POP
// con pop lo que hacemos es tomar el ultimo valor y devolverlo, para eso debemos asignalo a una variable
const frutas = ["manzana", "piña", "lechuga"];
const noFruta = frutas.pop()

console.log(frutas);
console.log(noFruta);
