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