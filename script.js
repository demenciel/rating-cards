var card1 = document.getElementById('container-card');
var card2 = document.getElementById('container-card-thank');
var button = document.getElementById("button");
var numberChange = document.getElementById("rate");


function storeValue(clicked_id) {
    var number = clicked_id;
    numberChange.innerHTML = number;
}

function hide() {
    card1.style.display = 'none';
}

function show() {
    card2.style.display = "flex";
}




