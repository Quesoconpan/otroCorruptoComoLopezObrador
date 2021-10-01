var gameState=0
var playerCount
var database
var Form1,Player1,Game1

function setup(){

database=firebase.database();

createCanvas(500,500);

Game1 = new Game();
Game1.getState();
Game1.restart();

}

function draw(){

background("blue");

}
