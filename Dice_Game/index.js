var numPlayers = 2;
var rolls = {};

for (var i = 0; i < numPlayers; i++) {
    var randomNumber = Math.floor(Math.random()*6)+1;

    var randImg = "./images/dice"+randomNumber+".png"; 

    var image = document.querySelectorAll("img")[i];

    image.setAttribute("src", randImg);

    rolls[i] = randomNumber;
}
    

if (rolls[0] > rolls[1]) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (rolls[0] === rolls[1]) {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
else if (rolls[1] > rolls[0]) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}