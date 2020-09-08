var mars;
var rocket,rocket_img;
var satelliteImg, asteroidImg,satellitesGroup,asteroidGroup;
var building,building_img,bg;
var gameState="start";
var distance=0;
var desert;


function preload(){
  rocket_img=loadImage("images/Rocket.png");
  building_img=loadImage("images/building.png");
  bg=loadImage("images/bg.png");
  satelliteImg=loadImage("images/satellite.png");
  asteroidImg=loadImage("images/meteor.png");
}
function setup() {
  createCanvas(400,800);
  rocket=createSprite(200,700,30,80);
  rocket.addImage(rocket_img);
  satellitesGroup=new Group();
  asteroidGroup=new Group();
  building=createSprite(200,700,100,200);
  building.addImage(building_img);
  
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