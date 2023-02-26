                            //clousures

                            //encerrandola en un parentesis, la funcion, asignando a matematica, y luego al final
                                //le pongo (), la invoco, esto se llama funcion auto invocada.
                                //Con esto, cuando el browser levante el archivo js, automaticamente al leerla
                                //se va a invocar, retornando los punteros a sus funciones que tiene dentro

                                //ASI emulamoas un namespace, por si hay conflicto con importaciones de clases
                                //con ,ismos nombres de metodos, sino llamaria al que tiene mas cerca ah

            //Esto normalmente se usa, para entregar o subir archivos, pasarlos a terceros y que no genere conflictos
            //Tambien podria limitarse la visibilidad de una func, y generar una privada y de uso solo interno
            //dentro de este archivo...
let matematica = (function clousurado()
{
    //tiro toda la biblioteca matematiac aca ah

    let PI = 3.14;
    function sumar (a,b){
        return a + b;
    }

    function restar (a,b){
        return a - b;
    }

    function dividir (a,b){
        return a / b;
    }
    //sumar
    //diviadir
    //restar 
    //etca

    //esta funcion, retorna un objeto, tipo 
    return {
        //retorna las funciones..
        sumar,
        restar,
        dividir,
        PI
    };
})();
