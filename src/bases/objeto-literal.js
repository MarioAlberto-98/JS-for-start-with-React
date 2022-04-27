/*

const persona={
  nombre: 'Tony',
  apellido:'Stark',
  edad:46
};

console.table(persona);
console.log(persona.nombre);
*/

const persona={
    nombre: 'Tony',
    apellido:'Stark',
    edad:46,
    direccion:{
      ciudad:'New York',
      zip:44456564,
      lat:13.53232,
      lng:243.56343
    }
  };
   
  
  //Para crear un nuevo objeto
  const persona2={...persona};
  persona2.nombre= 'Mario';
  console.log(persona);
  console.log(persona2);
  
  
  