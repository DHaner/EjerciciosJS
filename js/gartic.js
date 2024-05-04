var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var rect = canvas.getBoundingClientRect();
var x = 0, y = 0, dibujando = false, color = 'black', grosor = 1;
var lapiz = true, eraser = false;

function lapiztool() {
    lapiz = true;
    eraser = false;
}

function erasertool() {
    eraser = true;
    lapiz = false;
}

function addEventListeners() {
    if (lapiz || eraser) {
        canvas.addEventListener('mousedown', function(e) {//Cuando se da click con el mouse
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
            dibujando = true;
        });

        canvas.addEventListener('mousemove', function(e) {//Cuando el mouse se mueve
            if (dibujando) {
                if (eraser) {
                    borrar(x, y, e.clientX - rect.left, e.clientY - rect.top);
                } else {
                    dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
                }
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
            }
        });

        canvas.addEventListener('mouseup', function(e) { //Cuando dejas de dar click
            if (dibujando) {
                if (eraser) {
                    borrar(x, y, e.clientX - rect.left, e.clientY - rect.top);
                } else {
                    dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
                }
                x = 0;
                y = 0;
                dibujando = false;
            }
        });
    }
}

function defcolor(c) {
    color = c;
}

function defgrosor(g) {
    grosor = g;
}

function dibujar(x1,y1,x2,y2){
    ctx.beginPath();//Abrimos ruta
    ctx.strokeStyle=color;
    ctx.lineWidth=grosor;
    ctx.moveTo(x1,y1);//mueve el puntero del lapiz a la coordenada
    ctx.lineTo(x2,y2);//dibuja la linea
    ctx.stroke();
    ctx.closePath();//Cerramos ruta
}

function borrar(x1, y1, x2, y2) {
    // Calcula el tamaño del área a borrar
    var width = Math.abs(x2 - x1);
    var height = Math.abs(y2 - y1);

    // Determina las coordenadas del área a borrar
    var startX = Math.min(x1, x2);
    var startY = Math.min(y1, y2);

    // Borra el área especificada
    ctx.clearRect(startX, startY, width, height);
}
function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Agregar event listeners cuando se carga la página
window.onload = function() {
    addEventListeners();
};

