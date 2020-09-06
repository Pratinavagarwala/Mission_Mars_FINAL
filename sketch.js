var mars;
var rocket,rocket_img,satellitesGroup,asteroidGroup;
var building,building_img;
var gameState="start";
var distance=0;
var desert;


function Preload(){

 
}
function setup() {
  createCanvas(400,800);
  rocket=createSprite(200,700,30,80);
  rocket.shapeColor="white";
  rocket.scale=0.5;
  satellitesGroup=new Group();
  asteroidGroup=new Group();
  building=createSprite(200,700,100,200);
  building.shapeColor="white";
  
} 
function draw() {
  background("navy"); 
  if(mousePressedOver(building)){
    gameState="playEarth";
    rocket.y=500;
    building.velocityY=5;
    building.lifetime=100;
  }
  
  if (gameState==="playEarth"){
    rocket.x=mouseX;
     spawnAsteroids();
    distance=Math.round(frameCount/5);
  //  image(,0,-400,800,400);
  }
  console.log(distance);
  if(distance>100){
    background("black");
  }
  
  if(distance>100 && distance<150){
    
    spawnSatellites();
  }
  if(distance>80 && distance<100){
    
    spawnAsteroids();
  }
  
if(keyDown(UP_ARROW)){
  rocket.velocityY=rocket.velocityY-5;
}
if(keyDown(DOWN_ARROW)){
  rocket.velocityY=rocket.velocityY+5;
}
console.log(rocket.velocityY);
  
  
 
  drawSprites();
}


function spawnSatellites(){
  if(frameCount%84===0){
    var satellites=createSprite(100,0,10,10);
    satellites.shapeColor="Green";
    satellites.velocityY=5;
    satellites.x=random(10,390);
    satellites.lifetime=200;
  }
}
function spawnAsteroids(){
  if(frameCount%84===0){
    var asteroids =createSprite(100,0,10,10);
    asteroids.shapeColor="Brown";
    asteroids.velocityY=5;
    asteroids.x=random(10,390);
    asteroids.lifetime=200;
  }
}


