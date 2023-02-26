/*PROMESAS:


Una promesa es un objeto*/

//recibe un callback, lacual recibe 2 callbacks
//las promesas son retornadas por funciones que quieren ser asincronicas

function esPositivo(numeroo)
{
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isNaN(numeroo)){
                reject("No es un numero");
            }else{
                if(numeroo >= 0)
                {
                    resolve("Es positivo");
                }
                else{
                    resolve("Es negativo");
                }
            }
        });
    });
}

let p = esPositivo(132);


p.then((respuesta)=>{
    console.log(respuesta);
}); //si se invoca el resolve, se va a invocar automaticamente p.then, va a recibir lo que se pase al invocar al resolve(sarasa)

p.catch((error)=>{
    console.log(error);
}); //si se invoca el reject, se va a invocar automaticamente p.then, va a recibir lo que se pase al invocar al reject(sarasa)

//estado de la promesa puede estar pending o fullfilled
//resuelta o rechazada


//--------------------------------------------------------------------------------------------------------------------

function sumarPromesa(a,b)
{
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === "number" && typeof b === "number")
            {
                let suma = a+b;
                resolve(suma);
            }
            //no hace falta usar else, si entra al if, al encontrarse con el resolve, sale, escomo un return y lo mismo con el reject
            reject("Parametros invalidos");
        },1500);
    });
    return promesa;
}

function cuadradoPromesa(a)
{
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === "number" && typeof b === "number")
            {
                let cuad = a*a;
                resolve(cuad);
            }
            //no hace falta usar else, si entra al if, al encontrarse con el resolve, sale, escomo un return y lo mismo con el reject
            reject("Parametros invalidos para el cuadrado");
        },1500);
    });
    return promesa;
}

function multiplicarPromesa(a)
{
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === "number" && typeof b === "number")
            {
                let producto = a*b;
                resolve(producto);
            }
            //no hace falta usar else, si entra al if, al encontrarse con el resolve, sale, escomo un return y lo mismo con el reject
            reject("Parametros invalidos para el producto");
        },1500);
    });
    return promesa;
}


function restarPromesa(a,b)
{
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === "number" && typeof b === "number")
            {
                let resta = a-b;
                resolve(resta);
            }
            //no hace falta usar else, si entra al if, al encontrarse con el resolve, sale, escomo un return y lo mismo con el reject
            reject("Parametros invalidos, resta");
        },1500);
    });
    return promesa;
}



//------------------------------------------------------FUNCIONES ASINCRONAS

//La convierto en func asincrona, siempre si o si llevan un try catch,
//dentro de una funcion asincrona, podemos usar await, esto se usa adelante de la llamada de unafuncion 
    //quedevuellve una promesa, y dice, o espera a que la promesa que se devuelve, este fullfilled..
async function calcular(a,b)
{
    try
    {
        let suma = await sumarPromesa(a,b);
        let cuad = await cuadradoPromesa(suma);
        let producto = await multiplicarPromesa(cuad,10);
        let resta = await restarPromesa(producto,5);
        informar(resta);
    }
    catch(error)
    {
        console.error(error);
    }
};

calcular(4,5);


console.log("Fin");