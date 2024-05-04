let peso = null;
let url = '../assets/'
function flipPeso() {
    peso = document.getElementById('peso');
    if (peso.getAttribute('class') == null || peso.getAttribute('class') == 'back') {
        peso.setAttribute('class', 'front');
        changeImage(url + 'front5Pesos.jpg');
    } else {
        peso.setAttribute('class', 'back');
        changeImage(url + 'back5Pesos.jpg');
    }
}
function changeImage(image) {
    peso = document.getElementById('peso');
    peso.setAttribute('src', image);
}