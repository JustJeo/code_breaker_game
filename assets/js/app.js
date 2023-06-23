console.log("AYO! This is Jeo!");

// Get Random Number for Secret Code
function getRandomNumber() {
    return Math.floor(Math.random()*10);
}

function getSecretCode() {
    document.getElementById("code1").innerHTML = getRandomNumber();
    document.getElementById("code2").innerHTML = getRandomNumber();
    document.getElementById("code3").innerHTML = getRandomNumber();
    document.getElementById("code4").innerHTML = getRandomNumber();
}

// Listens for click on "Secret Code" btn
let random_btn = document.getElementById("random-code-btn");
random_btn.addEventListener("click", getSecretCode);