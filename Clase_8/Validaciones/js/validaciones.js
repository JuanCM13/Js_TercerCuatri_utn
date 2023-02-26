export const validarCampoVacio = (e)=>{
    if(e != null) 
    {
        const input = e.target;
        //trimeo para que si ingresa "  ", le saque los espacios vacios y me lo tome como ""..
        const value = input.value.trim();

        
        const $small = input.nextElementSibling;
        if(!value) //si viene null, esfalse, si viene "" es false, cualquier otra cosa, es true..
        {
            //si dejo cadena vacia, value da false, lo niego y se convierte a true, entra y aviso mensaje de error
            //console.log("Dejaste el campo vacio pa");
            //console.log($small);
            $small.textContent = `${input.name} requerido..`;
            $small.classList.add("danger");
            input.classList.add("inputError"); //agrego la clase de error..
        }
        else
        {
            $small.textContent = "";
            $small.classList.remove("danger");
            input.classList.remove("inputError");
        }
        //console.log(value);
    };
/*
const setError = (input,mensaje)=>{
    const $small = input.nextElementSibling;
    $small.textContent = mensaje || `${input.name} requerido`; //por corto circuito y falsi y truli, si viene con algo el mensaje lo toma true y asigna eso, sino asigna
                                                    //el otro...
}*/

export const validarEmail = (e)=>{
    //PAGINA DE EXPRESIONES REGULARES: RegExR;
    const pattern = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm    //la i es de incensitive
    const email = e.target.value.trim();
    if(email.length > 6)
    {
        pattern.test(email) ? clearError(e.target) : setError(e.target,"Error, revise el mail");  
    }

    //sino tambien puedo usarlo tipo "hola".match(pattern);
}

const setError = (input,mensaje)=>{
    const $small = input.nextElementSibling;
    $small.textContent = mensaje || `(input.name) requerido`;
    $small.classList.add("danger");
};

const clearError = (input,mensaje)=>{
    const $small = input.nextElementSibling;
    $small.textContent = "";
    $small.classList.remove("danger");
};

export const validarExtension = (e)=>{
    const extensionesValidas = ["gif","jpg","png","jpeg"]; //las validas, si no coincide no manda al back...
    const input = e.target;
    const archivo = input.files[0];
    console.log(archivo.name); //imprimo el nombre de la foto..
    const extension = archivo.name.split('.')[1]; //impimo solo el tipo de archivo, onda .jpg, .gif
    //console.log(archivo.name.split('.').pop); //impimo solo el tipo de archivo, onda .jpg, .gif
    extensionesValidas.includes(extension) ? clearError(input) : setError(input,"Negro no aceptamos ese formato..");
};