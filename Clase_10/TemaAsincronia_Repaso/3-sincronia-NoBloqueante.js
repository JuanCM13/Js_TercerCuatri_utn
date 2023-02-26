//Gestion asincrona, pero esta vez mandando a api del browser, y en vez dde esperar el resultado, lo llamo dentro de la arrow,
//asi tenemos este error de falta de resultados al ejecutar ciertor callbacks sin haber recibido aun el resultado, ya que
    //invocando desde dentro del callback, onda anidandolos, asi logramos que no se ejecute la proxima funcion y settime out, hasta que
        //tengamos el resultado

const sumar = (a,b)=>{
    let resultado;
    setTimeout(()=>{
        resultado = a + b;
        console.log(`El resultado de la suma es: ${resultado}`);
        cuadrado(resultado);
    },2000); 
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
        multiplicar(resultado,10);
    });
}

//aca voy a hacerlo declarando la funcion por fuera...
const multiplicar = (a,b)=>{
    let resultado;
    setTimeout(()=>{
        resultado = funcionita(a,b);
        console.log(`El resultado de la multiplicacion es:  ${resultado}`);
        restar(resultado,5);
    });
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
        //console.log("Resultado es: ",resultado);
        informar(resultado);
    });
}

//Esta aca ni la uso, onda voy a infrmar el resultado directo en restar, via func o no
function calcular(a,b)
{
    let suma = sumar(a,b);
    let cuadrar = cuadrado(suma);
    let multiplicacion = multiplicar(cuadrar,10);
    let resta = restar(multiplicacion,5);
    return resta;    
}

const informar = resultado=>console.log("El resultado es: ",resultado); 

console.log("Arranque");
sumar(4,5);
console.log("Termine");


//Esto funciona bien, y hace las consultas al servidor, ondano corre localmente, pero el problema es que
//pierde reutilizabilidad, onda dentro tiene hardcodeadoque funcion llamar, esto caga la portabilidad de las funciones,
//ponele si quiero sumar solamente, va a llamarme a todo el choclo de las otras funciones, si quiero
//multiplicar nomas, lo mismo, encima como esta planteado no retorna los resultados, pero por mas
//que le ponga el retornom igual va a estar llendo a los settimes out de las otras func, cuando ni siquiera quisiera
//hacer esto.

//Para evitar esto usamos el callback hell digamos. En la parte 4 lo explico, aunque es re poco mantenible.

