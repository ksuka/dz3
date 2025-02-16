document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", function () {
        console.log("Кнопка нажата ура взрывы")
    })

let knopk = document.querySelectorAll("button");

knopk.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.style.backgroundColor === "lavender"){
            button.style.backgroundColor = "rgb(18, 156, 184)";
            clickbox.style.margin = '2vw';
        }
        else {
            button.style.backgroundColor = "lavender";
            clickbox.style.margin = '3vw';
        }
    });
});

let glass = document.querySelectorAll("glass");

glass.forEach(function (glass) {
    glass.addEventListener("click", function () {
        if (glass.style.backgroundColor === "rgb(32, 209, 16)"){
            glass.style.backgroundColor = "rgb(18, 156, 184)";
            clickbox.style.margin = '2vw';

        }
        else {
            glass.style.backgroundColor = "rgb(32, 209, 16)";
            clickbox.style.margin = '3vw';
        }
    });
});

 })