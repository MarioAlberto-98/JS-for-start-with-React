import {getHeroeById} from './bases/Export-import-funcionescomunesconarreglos'



const getHeroeByIdAsync=(id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const p1=getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        },2000)
    });
}

getHeroeByIdAsync(1)
.then(heroe=>console.log('Heroe', heroe))
.catch(err=>console.warn(err))


