//Delegacion de Eventos
document.addEventListener('click',(e)=>{ //asi le englobo a toda la pagina el addevent, entonces si apreto el enlace, el parrafo o
                                                      //cualquier elemento de la pagina (englobado en el document), me va a indicar que objeto tiro 
                                                 //el evento click..
    if(e.target.matches("#divButton button")) //me traigo solo los botones que estan dentro del objeto con la clase #divButton
    {
        console.log((e.target).id);
    }

});                    