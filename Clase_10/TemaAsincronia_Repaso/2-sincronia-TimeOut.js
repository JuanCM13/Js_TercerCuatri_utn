//Gestion asincrona, pero esta vez mandando a api del browser, notar como se comporta,
//el ida y vuelta al mandarse las petisiones, asincronamente, onda muchas veces vamos a necesitar que 
//cosas asincronas, consulten el server o api pero estas pueden necesitar el resultado de otra operacion asincrona,
//para evitar esta gestion con falta de resultados.

const sumar = (a,b)=>{
    let resultado;
    setTimeout(()=>{
        resultado = a + b;
        console.log(`El resultado de la suma es: ${resultado}`);
    },2000);
    return resultado; 
}

//pasar la funcion flexcha, es lo mism que declarar la funcion por fuera y pasar el nombre, lo que hago ahi
//es crear la funcion y pasar ese callback por ahi, declarandolo y creandolo ahi, podria declararlo por fuera
//y pasar el nombre de la funciono o crearlo ahi mismo con function() etc



//aca voy a hacerlo en vez de con una arrow function, declarando una funcion ahi dentro
const cuadrado = (a)=>{
    let resultado;
    setTimeout(function(){
        resultado = a*a;
        console.log(`El resultado de el cuadrado es:  ${resultado}`);
    });
    return resultado;
}

//aca voy a hacerlo declarando la funcion por fuera...
const multiplicar = (a,b)=>{
    let resultado;
    setTimeout(()=>{
        resultado = funcionita(a,b);
        console.log(`El resultado de la multiplicacion es:  ${resultado}`);
    });
    return resultado;
}

function funcionita(num1,num2)
{
    return num1 * num2;
}

const restar = (a,b)=>{
    let resultado;
    setTimeout(()=>{
        resultado = a - b;
        console.log(`El resultado de la resta es: ${resultado}`);
    });
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

