function muestra(sValor, oTbl, oElemento){
    var nTabla=0, i=0;
    var oLinea;
    var oCeldaOpe, oCeldaRes, oCeldaCal;

    var oCtrl;
    var oCtrl2;
    if(isNaN(sValor))
        alert("Debe elegir la table de multiplicar");
    else{
        nTabla = parseInt(sValor,10);
        if(oElemento != null){
            oElemento.style.visibility = 'visible';

            if(oTbl != null){
                //si la tabla esta llena, vaciarla
                if(oTbl.rows.length > 1){
                    for(i=1; i<= 10; i++) oTbl.deleteRow(-1);
                }
            }
            for(i=1; i<=10; i++){
                oLinea = oTbl.insertRow(-1);
                oCeldaOpe = oLinea.insertCell(0);
                oCeldaRes = oLinea.insertCell(1);
                oCeldaCal = oLinea.insertCell(2);
                oCeldaOpe.innerHTML = nTabla + '*' + i;

                oCtrl = document.createElement('input');
                oCtrl.type = 'text';
                oCtrl.id = 'txtResultado' + i;
                oCeldaRes.appendChild(oCtrl);

                oCeldaCal.innerHTML = 'ok';
            }
        }
    }
}