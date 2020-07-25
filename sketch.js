var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;

var r1load,r2load;
var form, player, game;
var r1,r2,cars;

function preload(){
 r1load=loadImage('images/racer.png')
 r2load=loadImage('images/racer.png')
backgroundImage=loadImage("images/track.jpg")
}

function setup(){
 canvas = createCanvas(displayWidth,window.innerHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(backgroundImage)

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.update(2)
  }
}
