//las \" \" hacen que se puedan escribir las comillas dentro del texto
const cadena = "Juan side, \"My students learning JavaScript\".";

console.log(cadena);

// Ahora para escapar este texto hemos usado comillas simples en la apertura y cierre
// Por que dentro del texto estamos usando comillas dobles entonces y no queremos que estas hagan conflicto
const linecode = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(linecode);

// ESCAPAR SECUENCIAS EN CADENAS
// \'	comilla simple
// \"	comilla doble
// \\	barra invertida
// \n	línea nueva
// \r	retorno de carro
// \t	tabulación
// \b	límite de palabra
// \f	fuente de formulario
// En este ejemplo vemos como usar algunas de las formas de escapar con backSlash
// Incluso espacapamos un backSlash en la segunda linea
const preformat = "PrimeraLinea\n\t\\SecundaLinea\nTerceraLinea";

console.log(preformat);

//simbolo +
const mas = "Hola soy Juan, " + "Soy maestro.";

console.log(mas);

// Concatenar - romper cadena en varias lineas
// lo podemos usar con la declaración LET para poder cambiar el valor
let masigual = "Hola soy Juan, "
      masigual += "Soy maestro.";

console.log(masigual);

// CONCATENAR CON VARIABLES
const nombre = "Juan";
const saludo = "Hola soy " + nombre + ", soy Maestro.";

console.log(saludo);

// AGREGAR VARIABLES A UNA CADENA CON +=
const feeling = "Emocionado";
let descripcion = "Hoy estoy muy ";
    descripcion += feeling

console.log(descripcion);