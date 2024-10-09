class Libro {
 constructor(titulo, autor, categoria) {
  this.titulo = titulo;
  this.autor = autor;
  this.categoria = categoria;
 }
}

const libreria = [
 new Libro("Harry potter y la piedra filosofal", "J.K Rowling", "Ficción"),
 new Libro("El caballero de la armadura oxidada", "Robert Fisher", "Ficción"),
 new Libro("Quién conoce a greta garbo?", "Norma Huidobro", "Novela"),
 new Libro("Rayuela", "Julio Cortázar", "Novela, Ficción"),
 new Libro("Assassin's creed: renaissance", "Anton Gill", "Ficción Histórica"),
 new Libro("La sangre del padre", "Alfonso Goizueta", "Novela Histórica"),
 new Libro("Harry potter y el prisionero de azkaban", "J.K Rowling", "Ficción"),
 new Libro("Alas de sangre", "Rebecca yarros", "Juvenil"),
 new Libro("El niño", "Fernando Aramburu", "Novela Contemporánea"),
 new Libro("Las hijas de la criada", "Sonsoles Ónega", "Novela Histórica"),
 new Libro("Tu cerebro tiene hambre", "Boticaria García", "Salud"),
];

function capitalize(text) {
 const firstLetter = text.charAt(0);
 const rest = text.slice(1);
 return firstLetter.toUpperCase() + rest;
}

function buscarLibro() {
 const opcion = parseInt(prompt("Buscar por: 1- Título, 2- Autor, 3- Categoría"));

 let resultados = [];

 switch(opcion) {
  case 1:
   const titulo = capitalize(prompt("Ingrese el título del libro:"));
   resultados = libreria.filter(libro => libro.titulo.includes(titulo));
   break;

  case 2:
   const autor = capitalize(prompt("Ingrese el autor del libro:"));
   resultados = libreria.filter(libro => libro.autor.includes(autor));
   break;

  case 3:
   const categoria = capitalize(prompt("Ingrese la categoría del libro:"));
   resultados = libreria.filter(libro => libro.categoria.includes(categoria));
   break;

  default:
   console.log("Opción no válida. Intente nuevamente.");
 }

 if (resultados.length > 0) {
  console.log("Libros encontrados:");

  resultados.forEach(libro => {
   console.log(`Título: ${libro.titulo}, Autor: ${libro.autor}, Categoría: ${libro.categoria}`);
  });
 } else {
  console.log("No se encontraron libros.");
 }
}

function agregarLibro() {
 const titulo = capitalize(prompt("Ingrese el titulo del libro"));
 const autor = capitalize(prompt("Ingrese el autor del libro"));
 const categoria = capitalize(prompt("Ingrese la categoría del libro"));

 const nuevoLibro = new Libro(titulo, autor, categoria);

 libreria.push(nuevoLibro);

 console.log("Libro agregado exitosamente.");
}

function modificarLibro() {
 const titulo = capitalize(prompt("Ingrese el título del libro que desea modificar:"));
 const libro = libreria.find(libro => libro.titulo === titulo);

 if (libro) {
  libro.titulo = capitalize(prompt("Ingrese el nuevo título del libro:", libro.titulo));
  libro.autor = capitalize(prompt("Ingrese el nuevo autor del libro:", libro.autor));
  libro.categoria = capitalize(prompt("Ingrese la nueva categoría del libro:", libro.categoria));

  console.log("Libro modificado.");
 } else {
  console.log("No se ha encontrado tu libro.");
 }
}

function eliminarLibro() {
 const titulo = capitalize(prompt("Ingrese el título del libro que desea eliminar:"));
 const indice = libreria.findIndex(libro => libro.titulo === titulo);

 if (indice !== -1) {
  libreria.splice(indice, 1);
  console.log("Libro eliminado exitosamente.");
 } else {
  console.log("Libro no encontrado.");
 }
}

function mostrarInventario() {
 libreria.forEach((libro, index) => {
  console.log(`${index + 1}. Título: ${libro.titulo}, Autor: ${libro.autor}, Categoría: ${libro.categoria}`);
 });
}

do {
 opciones = parseInt(prompt("1- Buscar un libro 2- Agregar un libro, 3- Modificar un libro, 4- Eliminar un libro, 5- Mostrar biblioteca, o 0- Salir"));

 switch(opciones) {
  case 1:
   buscarLibro();
   break;

  case 2:
   agregarLibro();
   break;

  case 3:
   modificarLibro();
   break;

  case 4:
   eliminarLibro();
   break;

  case 5:
   mostrarInventario();
   break;

  case 0:
   console.log("Saliendo del sistema...");
   console.log("Presiona F5 para volver a ingresar a la biblioteca");
   break;

  default:
   console.log("Opción no válida. Ingrse un número de opción válido");
 }
} while (opciones !== 0);