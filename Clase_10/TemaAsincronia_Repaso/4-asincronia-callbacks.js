//Gestion asincronica, esta vez la idea es hacerl las funciones portables, agregando un parametro tipo callback,
//el cual independientemente de donde lo usemos, podemos asignarledistinta logica a hacer en el flujo de las
//funciones, asi se pierde esta limitacionde que siempre llamaban dentro al mismo metodo..


//Como dije, es nomas agregar el parametro callbakc (con ese indicamos la funcionalidad a realizar) 
//y para llamarlo es un re choclo, onda vamos a ver el callback hell, pero funcionar funciona.

const sumar = (a,b,callback)=>{
    let resultado;
    setTimeout(()=>{
        resultado = a + b;
        console.log(`El resultado de la suma es: ${resultado}`);
        callback(resultado);
    },2000); 
}

const cuadrado = (a,callback)=>{
    let resultado;
    setTimeout(function(){
        resultado = a*a;
        console.log(`El resultado de el cuadrado es:  ${resultado}`);
        callback(resultado);
    });
}

const multiplicar = (a,b,callback)=>{
    let resultado;
    setTimeout(()=>{
        resultado = funcionita(a,b);
        console.log(`El resultado de la multiplicacion es:  ${resultado}`);
        callback(resultado);
    });
}

function funcionita(num1,num2)
{
    return num1 * num2;
}

const restar = (a,b,callback)=>{
    let resultado;
    setTimeout(()=>{
        resultado = a - b;
        console.log(`El resultado de la resta es: ${resultado}`);
        callback(resultado);
    });
}

const informar = resultado=>console.log("El resultado es: ",resultado); 

function calcular(a,b)
{
    /*
    En escencia,aca todo arranca llamando al sumar, el sumar recibe, dos enteros y un callback, este callback
    va a ser el encargado, de llamar al metodo cuadrado, el tema es que el sumar nomas lo invoca con callback(),
    este si le paso solo el puntero de cuadrado todo bien sabe que lo invoca, peeeero el tema va a ser que rompe,
    por que recibe el resultado de esa suma yyyyy aparte un callback, por esto necesitamos de estas arrow functions
    intermedias, para poder indicarles como continuar, como dijo baus, son estos handlers, que saben que hacer
    y a quien invocar cuando se los invoque...
    asi con todos hasta llegar al ultimo el cual recibe que hacer con la resta, (llama al informar) y ya muere ahi
    el ciclo de vida o flujo de logica.
    */

    sumar(a,b,(suma)=>{
        cuadrado(suma,(cuadrado)=>{
            multiplicar(cuadrado,10,(multiplicacion)=>{
                restar(multiplicacion,5,(resta)=>{
                    informar(resta);
                })
            })
        })
    });
}

console.log("Arranque");
calcular(4,5);
console.log("Termine");

//Esto es terriblemente chancho y poco mantenible, asi que mas adelante vamos a gestionarlo con Promesas
