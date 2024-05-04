var isPlaying = false;

function toggleGif() {
    if (isPlaying) {
        document.getElementById("myGif").src = "../assets/ventilador.png";
        document.getElementById("myButton").innerText = "Encender";
        isPlaying = false;
    } else {
        document.getElementById("myGif").src = "../assets/ventilador.gif";
        document.getElementById("myButton").innerText = "Pausar";
        isPlaying = true;
    }
}