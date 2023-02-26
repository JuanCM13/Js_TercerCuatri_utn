const obj = new Object();
console.log(obj);

const obj2 = {};
console.log(obj2);

/*Por herencia prototipica, los wrapea, a valores primitivos.*/
const obj3 = new("cadena");
console.log(obj3);

const obj4 = new(5);
console.log(obj3);

const obj5 = new(true);
console.log(obj3);


/*Objeto literal, es un scope con variables clave valor, asi no puedo crear
    una plantilla, seria al dope o al pedo el prototipado o herencia prototipal o herencia de clases..*/

var x;
const persona = {
    nombre : "Pepe",
    edad : 30,
    sexo : "masculino",
    deportes : ["football","tennis"],
    saludar: function()
    {
        console.log("Hola");
        x = this;
    },
    hambre : false,
    presentarse()
    {
        console.log(`Hola me llamo: ${this.nombre} -- tengo: ${this.edad}`);
    }
};

console.log(x == persona);
console.log(persona.presentarse());
console.log(persona["nombre"]);

//podes crearles nuevas propiedades o atributos, desde fuera de la definicion
persona.email = "zxxxxxx@";

let nuevoAtributo = prompt("Ingrese el nombre del atributo");
let nuevoValor = prompt("Ingrese un valor");

persona[nuevoAtributo] = nuevoValor;

console.log(persona.nuevoAtributo);
console.log(persona.deportes[1]);
console.log(persona[deporteas][1]);




