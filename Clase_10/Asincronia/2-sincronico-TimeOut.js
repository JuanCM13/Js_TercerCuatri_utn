//SEGUNDA VERSION


//simulo que se tarde un poco en conseguir la respuesta..

function sumar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a + b;
        console.log("La suma es:",rdo)
    },2000) 
    return rdo;   
}

function cuadrado(a)
{
    let rdo;
    setTimeout(()=>{
        rdo = a*a;;
        console.log("El cuadrado es:",rdo)
    },1500)
    return rdo;
}

function multiplicar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a*b;
        console.log("El producto es:",rdo)
    },1800)
    return rdo;
}

function restar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a-b;
        console.log("La resta es:",rdo)
    },1000)
    return rdo;
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