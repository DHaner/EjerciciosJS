function palindromo(cadena){
    var resultado = "la cadena \"" + cadena + "\" \n"

    //Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();

    //Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");

    //Eliminar los espacios en blanco
    var cadenaSinEspacios = "";
    for(i in letrasEspacios)
        if(letrasEspacios[i] != "")
            cadenaSinEspacios += letrasEspacios[i];
    
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();

    var iguales = true;
    for(i in letras)
        if(letras[i] != letrasReves[i])
        iguales = false;

    if (iguales) resultado += " es un palindromo";
    else resultado += " no es un palindromo";
    
    return resultado;

}

alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta frase no se parece a ningun palindromo"));