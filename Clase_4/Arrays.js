/*Arrays*/
const razas = ["Boxer","Caniche","Siberiano","Labrado2"];

//la unica propiedad que tienen es el len
console.log(razas);

//para acceder a un elemento se puede via indice o tratarlo como cadena
console.log(razas[1]);
console.log(razas["1"]);

//si lo creo asi tengo un array vacio, pero si le pongo 10
//voy a tener un array de 10 elementos, todos vacios..
const vec3 = Array();
const vec4 = Array(10); //esto si n los inicializo, me los muestra undefined
console.log(vec4[1]);


//puedo agregar tamaño a un array y no agregarle elementos
razas.length = 10; //agregue tamaño, onda elementos pero vacios
razas.push("labrador"); //esto lo pushea pero al final del array onda si
            //antes le agregue lugar y me quedan 6 lugares disponibles, no lo agrega
            //acontinuacion sino que lo agrega al final, ojaldre..

//para recorrer uso foreach o for
razas.forEach((elemento) => 
                {
                    console.log(elemento);
                }); //recibe un callback osea delegado
                //por default el callback, recibe 3 params, el elemento, el indice y el array


let entradas = razas.entries(); //me devuelve un iterable

for(const iterator of entradas)
{
    console.log(iterator);
} //esto devuelve un elemento una especie de diccionario o array asociativo

let valores = razas.values();
let llaves = razas.keys();

for(const iterator of valores)
{
    console.log(iterator);
}

for(const iterator of llaves)
{
    console.log(iterator);
}

const copia = razas.concat(); //sirve para concatenar arrays, pero si no le paso nada, me devuelve una referencia nueva

copia.push("algo"); //tiene que ver con el shallow copy, osea 

console.log(razas);
console.log(copia);

/*=== vs ==
    el == no se fija en el tipo de dato por que en tiempo de compilacion por ejemplo
    en c#, va a tirar error de por si
    en js como es debilmente tipado, el === sirve para comparar el valor y el tipo..
    ej: 8 == "8" da true, mismo valor, no se fija en el tipo
    ej: 8 === "8" da false, mismo valor distinto tipo 
*/

console.log(razas === copia); //da false, distinto valor de la referencia, osea un objeto nuevo.. asi me doy cuenta

razas.pop(); //saca el ultimo

razas.unshift("pequines"); //ingresa el elemento al inicio del array y devuelve el tamaño
razas.shift(); //elimina el primer elemento y lo devuelve

razas.reverse(); //da vuelta el array

razas.sort(); //si no le pasas parametros, lo ordena alfabeticamente o si son numeros de menor a mayor
            //o  le pasamos un puntero a funcion como en c
razas.sort((elemento1,elemento2)=>{
    if(elemento1.length > elemento2.length)
    {
        return 1;
    }
    else
    if(elemento1.length < elemento2.length)
    {
        return -1;
    }
    else
    {
        return 0;
    }

    //o return elemento1.length - elemento2.length; es lo mismo
});

//es lo mismo que arriba..
razas.sort((e1,e2) => e1.length-e2.length);

//operator REST ... 
//como no tiene sobrecarga de metodos, si me pasan mas de los declarados
//con rest, como lo ataja como array, puedo manipularlo como crea
//esto lo soluciona typescript, para que no se manden estas macanas de pasar mas de los parametros formales declarados
function sumar(a,b, ...c)
{
    let suma = a + b;

    c.forEach((el)=>{
        suma += valor;
    });

    return suma;
}

console.log(sumar(4,5,6,7,8,9,10,11,12,13));


//spread operator

const mezcladito = razas.concat([1,2,3,4,5,6]);

//mezcladito tendria un nuevo array con todas las mascotas mas los numeros..
console.log(mezcladito);

//spread operator hace lo mismo pero asi:
//lo que hace es romper digamos el array y sueltan los elementos asi se forma 
//un nuevo array formado por ambos arraysm onda con concat..
const spreadMezcladito = [...razas, ...[1,2,3,4,5,6]];


//el ... lo que hace en spread es desarmar el array..



//para eliminar un elemento de un array uso splice

spreadMezcladito.splice(1,4); //primer param desde donde quiero arrancar a borrar y
                                //segundo param, el hasta donde cortar, exclusivo, para usar el length en vez de poner length -1

//slice lo que hace, es lo mismo pero retorna lo cortado                                

//filter y map y reduce , queda para explicar mas adelante..


//desestructuracion de elementos

let a = razas[0];
let b = razas[1];
let c = razas[2];

//para evitar hacer eso a manopla esta la desestructuracion:

let [d,e,f] = razas; //se adapta solito, escelente...


//concatenar con + o interpolacion con print f o aca ${}

let q = "algo";
let h = "vaso";
let l = "pera";

//acordarse de usar backtick, la derecha de p, altgr + esa tecla o alt 96
let frase = `Esto es un ${q} , esto es un ${h} , esto es un ${l}`;

console.log(frase);

//----------------------------

//en js todo es un objetoa
//herencia prototipal, herencia de delegacion de objetos
//wrapper, en tiempo de jecucion agarra el tipo de dato, y lo convierte en number para
//usar sus metodos de objeto number, como que lo castea a su fipo padre..
let numero  = 3;

console.log(numero.toFixed());

//de cualquiera de las 2 formas lo muestra como array
//por esto el prototype, de la herenia prototipica 
//aca no hace wrap, directamente los crea como objeto de una
const vec = [];
const vec2 = Array();

const miFuncion = function()
                    {
                        console.log("hola");
                    };

console.log(miFuncion());
console.log(typeof miFuncion);
//te devuelve el tipo de objeto o la funcion depende el browser                    

/*En tiempo de ejecucion si es tipo primitivo, es wrappeado a 
su tipo prototipar, en el caso numerico a number, siguen siendo primitivos
pero en tiempo de ejecucion se castean automaticamente a su tipo base para poder
tener dichas propiedades y metodos.*/
