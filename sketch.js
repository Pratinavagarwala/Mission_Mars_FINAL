var damage=0;
var game;
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
  city=loadImage("images/bg1.jpg");
}
function setup() {
 
  createCanvas(1000,900);
  game=new Game();
 satellitesGroup=new Group();
 
 asteroidGroup=new Group();
  game.start();
  
  
} 

function draw() {
  //background("black"); 

  if(gameState==="play"){
    clear();
    background("black");
    game.play();
  }
}
function spawnSatellites(){
  if(frameCount%84===0){
    var satellites=createSprite(100,0,10,10);
    satellites.addImage(satelliteImg)
    satellites.velocityY=5;
    satellites.x=random(10,windowWidth-10);
    satellites.lifetime=200;
    satellitesGroup.add(satellites);
  }
}
function spawnAsteroids(){
  if(frameCount%84===0){
    var asteroids =createSprite(100,0,10,10);
    asteroids.addImage(asteroidImg)
    asteroids.velocityY=5;
    asteroids.velocityX=5;
    asteroids.x=random(10,windowWidth-10);
    asteroids.lifetime=200;
    asteroidGroup.add(asteroids);
  }
}


  