function limpiar(){
    lista = document.querySelectorAll('p');

    if(lista.length != 0) {
        i = lista.length - 1;
        while (i > -1){
            lista[i].parentNode.removeChild(lista[i--]);
        }
    }
    else alert ("No hay parrafos a eliminar");
}

function esPar(numero){
    var resultado = parImpar(numero);
    var parrafo =  document.createElement('p');
    var contenido = document.createTextNode('El numero ' + numero + 'es ' + resultado);
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);
    document.getElementById("num").value = "";
    alert("El numero " + numero + " es " + resultado);
}

function parImpar(numero){
    if(numero % 2 == 0) return "par";
    else return "impar";
}