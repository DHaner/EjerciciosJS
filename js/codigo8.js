function info(cadena){
    var resultado = "la cadena \"" + cadena + "\" ";

    //comprobar mayusculas y minusculas
    if (cadena == cadena.toUpperCase())
        resultado += "esta formada solo por mayusculas";
    else if (cadena == cadena.toLowerCase())
        resultado += " esta formada solo por minusculas";
        else resultado += " esta formada por mayusculas y minusculas";
    
    return resultado;
}

alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
alert(info("Es un lugar de la mancha..."));
alert(info("aprendiendo javascript..."));