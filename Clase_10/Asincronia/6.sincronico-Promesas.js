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

console.log("Inicio");

sumarPromesa(4,5)
.then((suma)=>{
    return cuadradoPromesa(suma); //si es correcto, aca recordar que cada uno retorna lo asignado al reject() o resolve(), esto lo ataja el arrow del prox .then y asi sucesivamente
})
.then((cuadrado)=>{
    return multiplicarPromesa(cuadrado,10);
})
.then((producto)=>{
    return restarPromesa(producto,5);
})
.then((resta)=>{
    informar(resta);
})
.catch((err)=>{ //atrapo el aerror, con solo un catch anidado..
    console.log(err);
});



//para reducirla, uso las propiedadesde las arrow functions, si solo recibe un param, saco los parentesis, y si retorna directo salo el return
function calcular(a,b)
{
 sumarPromesa(a,b)
.then(suma=>cuadradoPromesa(suma))
.then(cuadrado=>multiplicarPromesa(cuadrado,10))
.then(producto=>restarPromesa(producto,5))
.then(resta=>informar(resta))
.catch(err=> //atrapo el aerror, con solo un catch anidado..
    console.log(err));
};

calcular(4,5);


console.log("Fin");