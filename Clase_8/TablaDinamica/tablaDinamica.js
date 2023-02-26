//Encapsulamos toda la logica para crear la tabla, dividiendo sectores, exportando solo crear tabla el cual,
//va a tener ya dentro el cuerpo y cabecera

//funcion creadora de cabecera, creo la cabecera, la tr, y por cada elemento del objeto row, creo una th y le asigno el nombre del campo, y eso lo asigno al tr..
function crearCabecera(row)
{
    const cabecera = document.createElement("thead"); //creo el elemento thead 
    const tr = document.createElement("tr"); //creo el table row..

    for (const key in row) { //itero los rows, para saber las keys, con forin, para cada key genero un th y le asigno la key
        
        if(key !== "id")
        {
            const th = document.createElement("th");        //osea seria asignarle la clave o nombre de la tabla...
            th.textContent = key;
            tr.appendChild(th);
        }    
    }

    cabecera.appendChild(tr); //le agrego ya el tr a la cabecera

    return cabecera;
    //con forin recorro objetos, con forof recorro arrays...
}

//funcion creadora de cuerpo
function crearCuerpo(arrayData)
{
    const cuerpo = document.createElement("tbody");
    
    arrayData.forEach(element => {
        const fila = document.createElement("tr"); //por cada elemento creo una fila
        for (const key in element) {  //itero ese elemento y por cada uno voy haciendo tds osea celdas
            const celda = document.createElement("td"); //  
            if(key !== "id")
            {
                celda.textContent = element[key]; //el valor en la pos key
                fila.appendChild(celda); //agrego la celda a la fila
    
            }
            else
            {
                fila.setAttribute("data-id",element[key]);    
            }
        }
        cuerpo.appendChild(fila);
        //cuerpo.
    })
    return cuerpo;
}

//funcion creadora de tabla, retornando un table para ya ser usado..
export function crearTabla(arrayData)
{
    if(!Array.isArray(arrayData)) //chequeo que lo que recibo sea de tipo array
    {
        return null; //escapo, si los datos no son validos o vino erroneo..
    }

    const tabla = document.createElement("table");
    tabla.appendChild(crearCabecera(arrayData[0])); //le paso el primer elemento para que pueda sacar los keys en crearCabecera
    tabla.appendChild(crearCuerpo(arrayData)); //me genera el tbody, iterandome todo el array y creando los rows

    return tabla;
}