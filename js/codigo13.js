function agregaLinea(){
    var oTbl = document.getElementById("tb1Uno");
    var oLin = oTbl.insertRow(-1);
    var oCelda1 = oLin.insertCell(0);
    var oCelda2 = oLin.insertCell(1);
    var oCelda3 = oLin.insertCell(2);
    oCelda1.innerHTML = "Celda";
    oCelda2.innerHTML = "Texto y campo" + "<input type='text' name='campo' />";

}

function eliminaLinea(){
    var oTbl = document.getElementById("tb1Uno");
    oTbl.deleteRow(-1);
}