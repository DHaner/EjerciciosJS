window.onload = function(){
    var info = document.getElementById("Informacion");
    var enlaces = document.getElementsByName("a");

    info.innerHTML = "Numero de enlaces = " + enlaces.length;

    //Direccion 
    var mensaje = "El penunltimo enlace apunta a: " + enlaces(enlaces.length - 2).href;

    //agrega informacion al mensaje para ser visualizado en el HTML:
    info.innerHTML = info.innerHTML + "<br>" + mensaje;

    //Numero de enlaces que apuntan a http://prueba
    var contador = 0;
    
    for(var i = 0; i < enlaces.length; i++){
        //Es necesario comprobar los enlaces http://prueba y
        //http://prueba/ por las diferencias entre navegadores
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
            contador ++;
    }

    //Agrega informacion al mensaje para ser visualizado en el HTML:
    info.innerHTML = info.innerHTML + "<br>" + contador + " enlaces apuntan a http://prueba";

    //Numero de enlaces del tercer parrafo
    var parrafos = document.getElementsByTagName("p");
    enlaces = parrafos[2].getElementsByTagName("a");

    //agrega informacion al mensaje para ser visualizado en el HTML:
    info.innerHTML = info.innerHTML + "<br>" + "Numero de enlaces del tercer parrafo = " + enlaces.length;


    

}
