/*
quiero sumar 2 numeros, al result le calculo el cuadrado
al resultado lo multiplico por 10
y ese resultado, le resto 5 y muestro el resultado por consola


*/

/*Esto es sincronico, hasta que una instruccion no retorne, nose ejecuta la otra.*/

function sumar(a,b)
{
    return a + b;
}

function cuadrado(a)
{
    return a*a;
}

function multiplicar(a,b)
{
    return a * b;
}

function restar(a,b)
{
    return a - b;
}

function informar(valor){
    console.log(`El resultado es: ${valor}`);
}

console.log("inicio");
let suma = sumar(4,5);
let cuad = cuadrado(suma);
let prod = multiplicar(cuad,10);
let rest = restar(prod,5);
console.log("fin");