import {validarEmail, validarCampoVacio, validarExtension} from "./validaciones.js";

//desestructuracion tipo react
const formulario =  document.forms[0];
const {txtNombre, txtEmail, txtContraseña , txtContraseña2 , ctrlFile} = formulario;

/*
formulario.addEventListener("submit",(e)=>{
    e.preventDefault(); //aborto el evento por defecto
    validarCampoVacio(txtNombre);
});*/

//txtNombre.addEventListener("blur",(e)=>validarCampoVacio(e));
const controles = formulario.elements;
for(let i = 0; i< controles.length ; i++)
{
    const control = controles.item(i); 
    if(control.matches("input")) //el [] dentro del matches, hace una consulta query tipo css...
    {
        if(
            control.matches("[type=email]") ||
            control.matches("[type=text]") ||
            control.matches("[type=password]")  
        )
        {
            control.addEventListener("blur",validarCampoVacio);
            if(control.matches("[type=email]"))
            {
                control.addEventListener("input",validarEmail);
            }
        }
        else if(control.matches("[type=file]"))
        {
            control.addEventListener("change",validarExtension);
        }
        //console.log(control.item(i));
    }
}    

//console.log(document.forms[0]);

/*const controles = document.forms[0].elements; 
console.log(controles);*/

/*
for(let i = 0; i< controles.length ; i++)
{
    if(controles.item(i).matches("[type=email]")) //el [] dentro del matches, hace una consulta query tipo css...
    {
        console.log(controles.item(i));
    }
}*/