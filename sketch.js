var form;
var mars;
var rocket,rocket_img;
var satelliteImg, asteroidImg,satellitesGroup,asteroidGroup;
var building,building_img,bg;
var gameState="start";
var gamePosition;
var distance=0;
var desert,desertImg;


function preload(){
  rocket_img=loadImage("images/Rocket.png");
  building_img=loadImage("images/building.png");
  bg=loadImage("images/bg.png");
  satelliteImg=loadImage("images/satellite.png");
  asteroidImg=loadImage("images/meteor.png");
  desertImg=loadImage("images/Desert.png");
}
function setup() {
 
  createCanvas(1000,900);
  game=new Game();
 
  game.start();
  
  
} 

function draw() {
  //background("white"); 

  if(gameState==="play"){
    clear();
    game.play();
  }
}
function spawnSatellites(){
  if(frameCount%84===0){
    var satellites=createSprite(100,0,10,10);
    satellites.addImage(satelliteImg)
    satellites.velocityY=5;
    satellites.x=random(10,390);
    satellites.lifetime=200;
  }
}
function spawnAsteroids(){
  if(frameCount%84===0){
    var asteroids =createSprite(100,0,10,10);
    asteroids.addImage(asteroidImg)
    asteroids.velocityY=5;
    asteroids.x=random(10,390);
    asteroids.lifetime=200;
  }
}


  