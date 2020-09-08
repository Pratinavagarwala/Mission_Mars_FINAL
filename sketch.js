var form;
var mars;
var rocket,rocket_img;
var satelliteImg, asteroidImg,satellitesGroup,asteroidGroup;
var building,building_img,bg;
var gameState="start";
var gamePosition="start";
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
  form=new Form();
  
  rocket=createSprite(200,700,30,80);
  rocket.addImage(rocket_img);
  satellitesGroup=new Group();
  asteroidGroup=new Group();
  building=createSprite(200,700,100,200);
  building.addImage(building_img);
  desert=createSprite(0,500,1000,900);
  desert.addImage(desertImg);
} 

function draw() {
  //background("white"); 
  image(desert,0,0);
if(gameState==="start"){
  form.display();
  
}else if(gameState==="play"){
  form.hide();
  if(mousePressedOver(building)){
    gamePosition="playEarth";
    rocket.y=500;
    building.velocityY=5;
    building.lifetime=100;
  }
  
  if (gamePosition==="playEarth"){
    rocket.x=mouseX;
     spawnAsteroids();
    distance=Math.round(frameCount/5);
  //  image(,0,-400,800,400);
  }
  console.log(distance);
  if(distance>100){
    //background("black");
  }
  
  if(distance>100 && distance<150){
    
    spawnSatellites();
  }
  if(distance>80 && distance<100){
    
    spawnAsteroids();
  }
  
if(keyDown(UP_ARROW)){
  rocket.velocityY=rocket.velocityY-2;
}
if(keyDown(DOWN_ARROW)){
  rocket.velocityY=rocket.velocityY+2;
}
console.log(rocket.velocityY);
if(asteroidGroup.isTouching(rocket)){
  rocket.destoyEach();
}
if(satellitesGroup.isTouching(rocket)){
  rocket.destoyEach();
}

  
 
  drawSprites();
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


  