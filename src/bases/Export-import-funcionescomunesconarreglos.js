

import {heroes} from '../data/heroes';


/*
const getHeroeById = (id) => {
  return heroes.find( (heroe) =>{
    if(heroe.id === id){
      return true;
    }else{
      return false;
    }
  });
}
*/
// Mas simplificado
//const getHeroeById = (id) => heroes.find((heroe) =>heroe.id===id);

//console.log(getHeroeById(2));

//Para encontrar algun dato en texto
//Se usa Filter

//const getHeroesByOwner=(owner) => heroes.filter((heroe) => heroe.owner ===owner);

//console.log(getHeroesByOwner('DC'));

export const getHeroeById = (id) => heroes.find((heroe) =>heroe.id===id);