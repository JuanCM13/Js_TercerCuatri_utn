//SEGUNDA VERSION


//Para que sea no bloqueante, 

/*
function sumar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a + b;
        console.log("La suma es:",rdo)
    },2000) 
    return rdo;   //el return es instantaneo, pero la var rdo, todavia no recibe instantaneamente el resultado, entonces aca retorna primero nan
}*/

function sumar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a + b;
        console.log("La suma es:",rdo);

        cuadrado(rdo); //en vez de retornar algo, cuando tenga el resultado de la suma, la invoca ella asi no retorna nan
    },2000) 
}

function cuadrado(a)
{
    let rdo;
    setTimeout(()=>{
        rdo = a*a;
        console.log("El cuadrado es:",rdo);
        multiplicar(rdo,10);
    },1500)
}

function multiplicar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a*b;
        console.log("El producto es:",rdo);
        restar(rdo,5);
    },1800)
}

function restar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a-b;
        console.log("La resta es:",rdo);
        informar(rdo);
    },1000)
}

console.log("inicio");
let suma = sumar(4,5);
let cuad = cuadrado(suma);
let prod = multiplicar(cuad,10);
let rest = restar(prod,5);

function informar(valor){
    console.log(`El resultado es: ${valor}`);
}
console.log("fin");


//ESTO ESTA BIEN, PERO NO TAN BIEN, POR QUE ASI NO SE PUEDE REUTILIZAR FUNCIINES, POR QUE DELEGAS DENTRO DE CADA
    //FUNC, QUE INVOQUEAA A LA OTRA, Y NO SIEMPRE LO VAS A QUERER