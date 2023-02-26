//Gestion sincrona, paso a paso. Programacion estructurada digamos

const sumar = (a,b)=>{
    let resultado = a + b;
    console.log(`El resultado de la suma es: ${resultado}`);
    return resultado;
}

const cuadrado = (a)=>{
    let resultado = a * a;
    console.log(`El resultado del cuadrado es: ${resultado}`);
    return resultado;
}

const multiplicar = (a,b)=>{
    let resultado = a * b;
    console.log(`El resultado de la multiplicacion es: ${resultado}`);
    return resultado;
}

const restar = (a,b)=>{
    let resultado = a - b;
    console.log(`El resultado de la resta es: ${resultado}`);
    return resultado;
}

function calcular(a,b)
{
    let suma = sumar(a,b);
    let cuadrar = cuadrado(suma);
    let multiplicacion = multiplicar(cuadrar,10);
    let resta = restar(multiplicacion,5);
    return resta;    
}

console.log("Arranque");
console.log(calcular(4,5));
console.log("Termine");

