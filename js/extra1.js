let yes_top = 0; let yes_left = 0; let button_yes = '';
let no_top = 0; let no_right = 0; let button_no = '';
function moveButton() {
    button_no = document.getElementById('no'); button_yes = document.getElementById('yes');
    yes_top = button_yes.style.top; yes_left = button_yes.style.left;
    no_top = button_no.style.top; no_right = button_no.style.right
    let new_top = Math.floor(Math.random() * 100);
    let new_right = Math.floor(Math.random() * 100);
    button_no.style.top = new_top + '%'; button_no.style.right = new_right + '%'
}

let body = '';
function showMessage() {
    body = document.body;
    body.innerHTML = "<label> <p> I Know That You Accepted Me </p>" +
                              "<p> I Love You Tilina, Let's Play FreeFire And </p>" +
                              "<p> Let's Play To Defeat Insanitos 😍 </p> </label>";
    body.style.backgroundImage = "url('../assets/freeExtra1.jpg')"
}