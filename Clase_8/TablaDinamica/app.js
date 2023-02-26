import {personas} from './data.js';
import {crearTabla} from './tablaDinamica.js';
import {Anuncio} from './Anuncio.js';

console.log(personas);

//La idea seria, genero una tabla dinamica en base al array que importo, esa tabla la asigno a appendChild del .divTabla

const createTable = (personas)=>{
//tendria que generarme la tabla, el thead, el tbody, el tfoot, al thead le asigno los nombres de las keys del array
    //podria sacarlos del primer elemento del array data[0] y ahi voy sacando los nombres, despues voy 
    //creando trs y los voy asignando al tbody, recorriendo el array completo...



}; //esto tengo que hacer que retorne una tabla em base a la data que le pase.. el array ah

const divTabla = document.querySelector(".divTabla"); 

divTabla.addEventListener("click",(e)=>{
    const emisor = e.target;
    //console.log("click");
    if(emisor.matches("tbody tr td")) //para que cuando clicke algun tr, me tire la info del elemento en base a ese id
    {
        //console.log(emisor.parentElement.dataset.id); //por burbujeo me toma el sender como el td, como tengo el id en el tr, busco el parent de ese td...
        let id = emisor.parentElement.dataset.id; //consigo el id
        const persona = personas.find((element)=>
            element.id == id 
        );
        console.log(persona);
    }
});

const pepe = divTabla.appendChild(crearTabla(personas)); //aca le enchufo como hijo al .divTabla, la tabla retornada                                     
                                    //por la func que me crea dinamicamente la tabla

document.getElementById("btnMostrarPersonas").addEventListener("click",pepe);