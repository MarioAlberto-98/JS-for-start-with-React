//Arreglos
const arreglo =[1,2,3,4];

let arreglo2 =[...arreglo, 5];

console.log(arreglo);
console.log(arreglo2);



const vengadores = [
  { nombre: "Tony", apellidos: "Stark" },
  { nombre: "Steve", apellidos: "Rogers" },
  { nombre: "Bruce", apellidos: "Banner" },
  { nombre: "Natasha", apellidos: "Romanoff" },
  { nombre: "Thor", apellidos: "Odinson" },
  { nombre: "Clint", apellidos: "Barton" },
];

function generarNombre({ nombre, apellidos }) {
  return `${nombre} ${apellidos}`;
}

const nombres = vengadores.map(generarNombre);

console.log(nombres);