/*El dom es una api, apllication programming interface, una api es una interface, o una serie de metodos que nos permiten
programar aplicaciones, delegando funcionalidades para que sean procesadas por estas funciones o metodos.

En el browser hay distintas apis, el api dom, osea document object model, se encarga de ver el documento
html, como un objeto en memoria, cuando aparece el index y es leido por el navegador, al renderizarlo, primeramente
genera el DOM, osea traduce el codigo html, a un objeto en memoria. entonces desde JS, se ve como un arbol
jerarquico, donde el DOM es todo el arbol.

NODO TIPO NODO
NODO TIPO ELEMENTO
NODO TIPO COMENTARIO
NODO TIPO FRAGMENTO

Esto de los tipos, buscarlo en W3 school, hay 12 tipos de nodos




A su vez el dom cuelga, del objeto window*/

console.log(window);
console.log(window.document);
//o directamente pongo document
console.log(document);

//y ahi puedo ir viendo objeto por objeto
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);


//Para acceder a el dom, con el document. podemos arrancar a pegarle al documento , elementos etc..

console.log(document.links[1]); //devuelve un document list type, con el listado de todos los a del html, ah, le puedo especificar cual mostrar via indice
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets); //me tira el listado de archivos .css, linkeados al html
console.log(document.scripts); //me tira el listado de archivos .js linkeados al html
console.log(document.title);
console.log(document.characterSet); //me tira el juego de caracteresusado por el html, osea el utf8
console.log(document.documentElement.lang); //me devuelve el lenguaje de la pagina
console.log(document["lang"]); //aplica esto tambien, de accederlo por clave, ya que todo objeto aca es un array asociativo ah


//TODO LO QUE ESTA CARGADO EN MEMORIA, PODEMOS ACCEDERLOS VIA JAVA SCRIPT, YA QUE EL NAVEGADOR CREA EL DOM
//Y VAMOS PEGANDOLE AHI


//SELECTORES

//El mas clasico, para apuntarle a un elemento via ID es el getElementById()

console.log(document.getElementById("parrafo12"));


//byTagName te trae una coleccion de todos los elementos x indicados

console.log(document.getElementsByName("li"));

const elemen = document.getElementsByName("li");  // aca me devuelve un NODE LIST
for(let i=0 ; i < elemen.length ; i++)
{
    console.log(elemen[i]); // asi puedo recorrer ese listado de li que me trae, y mostrarlos
}

console.log(document.getElementsByClassName("card")); //no importa que tipo de etiqueta sea, me trae todas en las que aparezca la clase pasada ah
console.log(document.getElementsByName("nombre")); //no importa que tipo de etiqueta sea, me trae todas en las que aparezca la clase pasada ah



//MUCHOS DE ESOS YA RIPEARON, SE REEMPLAZARON POR:
//queryselector y queryselectorall

//console.log(document.getElementById("parrafo1")); //para pegarle al id, es mas especifico...
console.log(document.querySelector("#parrafo12")); //esta parsea con expresiones regulares, es menos eficiente que getElement , por eso se sigue usando getElement

//console.log(document.getElementsByClassName("card")); //no importa que tipo de etiqueta sea, me trae todas en las que aparezca la clase pasada ah
console.log(document.querySelectorAll(".rojo"));


//const elemen = document.getElementsByName("li");  // aca me devuelve un NODE LIST
console.log(document.querySelectorAll("li"));



//modificaciones y creacion de elementos html desde js


//tipo texto, innerText , textContent , innerHTML, outerHTML. Son elementos del dom
//inner text no es standard del apidom, los otros 3 si, pero igual funciona

const $p12 = document.getElementById("parrafo12");
console.log($p12);
if($p12 != null)
{
    let texto = "Esto es un texto de prueba, para rellenar el parrafo..";
    $p12.textContent = texto;
}
else{
    console.log("Rompi todo");
}

//ATRIBUTOS:

const $linkGoogle = document.querySelector("a");

if($linkGoogle != null)
{
    console.log($linkGoogle.href); //muestro el atributo href del link a, osea la url
    //sino con getAtribute evito usar el .
    console.log($linkGoogle.getAttribute("href")); //muestro el atributo href del link a, osea la url

    //para agregarle un nuevo atributo uso el setAtribute
    $linkGoogle.setAttribute("target","_blank"); //primer atributo es el atributo nuevo y el segundo el valor..
}
else{
    console.log("Rompi todo");
}


//ESTILOS: 

const $li = document.querySelector("ul").firstElementChild; // me traigo el primer list... y de ese list, el primer elemento

console.log($li.style);
console.log($li.getAttribute("style"));

$li.style.backgroundColor = "blue"; //aca no puedo poner como en css background-color, no se admiten -, asi que se usa camelcase, aplica para todas las props compuestas de css

$li.style.setProperty("background-color","cyan"); // aca si podes usar el -, aca le paso la cadena asi que si se permite

