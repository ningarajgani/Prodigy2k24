//movements animation
var card = document.querySelector(".card");
var container = document.querySelector(".card-container");


function changethings(contain, e, speed) {
    //  console.log(contain);
    var card = contain.querySelector(".card");
    let xAxis = (window.innerWidth / 2 - e.pageX) / speed;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
}

function enter(contain, e) {
    var card = contain.querySelector(".card");
    card.style.transition = "all 0.08s ease";
}

function out(contain, e) {
    var card = contain.querySelector(".card");
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
}


