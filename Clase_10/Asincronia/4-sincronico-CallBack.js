//SEGUNDA VERSION

/*
function sumar(a,b)
{
    let rdo;
    setTimeout(()=>{
        rdo = a + b;
        console.log("La suma es:",rdo);

        //cuadrado(rdo); //en vez de retornar algo, cuando tenga el resultado de la suma, la invoca ella asi no retorna nan
    },2000) 
}*/

//le agrego un nuevo param, el callback, la func que va a saber que hacer con la funcion cuando termine la suma
function sumar(a,b,callback)
{
    let rdo;
    setTimeout(()=>{
        rdo = a + b;
        console.log("La suma es:",rdo);
        callback(rdo); //aca lo hago dinamico, lo voy a poder reutilizar para otros casos, pasandole la func que vaya a hacer algo con esa suma
    },2000) 
}

function cuadrado(a,callback) //este callback es el puntero a func, que va a saber que hacer con el resultado
{                           //entonces si yo por ejemplo solo quisiera mostrarlo, en vez de hacer estos llamados,
                    //hariaa algo asi: cuadrado(4,(a)=>{console.log(a)})
    let rdo;
    setTimeout(()=>{
        rdo = a*a;
        console.log("El cuadrado es:",rdo);
        callback(rdo,10);
    },1500)
}

function multiplicar(a,b,callback)
{
    let rdo;
    setTimeout(()=>{
        rdo = a*b;
        console.log("El producto es:",rdo);
        callback(rdo,5);
    },1800)
}

function restar(a,b,callback)
{
    let rdo;
    setTimeout(()=>{
        rdo = a-b;
        console.log("La resta es:",rdo);
        callback(rdo);
    },1000)
}

// console.log("inicio");
// let suma = sumar(4,5,cuadrado);
// let cuad = cuadrado(suma,multiplicar);
// let prod = multiplicar(cuad,10,restar);
// let rest = restar(prod,5,informar);

// function informar(valor){
//     console.log(`El resultado es: ${valor}`);
// }
// console.log("fin");


/*ACORDATE QUE CADA FUNC RECIBE UN CALLBACK, HAY QUE HACER ESTE CAMINITO, POR QUE PONELE QUE EL SUMAR RECIBE LOS NUMS Y LA FUNC MULTIPLICAR
    //OKEY TODO BIEN, PERO DESPUES CUANDO INVOQUE A MULTIPLICAR, MULTIPLICAR TAMBIEN RECIBE UN CALLBACK, OSEA HAY QUE IR HACIENDO FUNCS INTERMEDIAS
        //PARA QUE LAS FUNCIONES QUE SE VAYAN INVOCANDO, SEPAN A QUE CALLBACK LLAMAR...  
*/
sumar(4,5,(suma)=>{                                //esto es el callback hell, anidar elementos dentro de otros
    cuadrado(suma,(cuad)=> {
        multiplicar(cuad,10,(producto)=>{
            restar(producto,5,(resta)=>{
                informarresta(resta);
            })
        })
    })
})




//AHORA SI ESTA MEJOR, VOLVEMOS A RECUPERAR ESTA INDIVIDUALIDAD EN LAS FUNCIONES.