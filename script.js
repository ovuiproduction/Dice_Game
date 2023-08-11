
var player1score = document.getElementById("player1");
var player2score = document.getElementById("player2");
const playbtn = document.getElementById("play");
var result = document.getElementById("result");

var arr = ["./images/dice1.png","./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];


playbtn.addEventListener("click",playdice);

function playdice(){

let random1 = Math.floor(Math.random()*6)+1;

player1score.innerHTML = `<p>Player 1</p><img id="player1" class="img1" src="${arr[random1]}">`

let random2 = Math.floor(Math.random()*6)+1;

player2score.innerHTML = `<p>Player 2</p><img id="player2" class="img2" src="${arr[random2]}">`

if(random1>random2){
    result.innerHTML = `Player 1 Win`;
}else if(random1 == random2){
    result.innerHTML = `Both Win`;
}
else{
    result.innerHTML = `Player 2 Win`;
}
}
