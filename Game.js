class Game{
    constructor(){

    }

    start(){
        form=new Form();
        form.display();
        desert=createSprite(500,-2000,1000,900);
        desert.addImage(desertImg);
        rocket=createSprite(200,700,30,80);
        rocket.addImage(rocket_img);
        satellitesGroup=new Group();
        asteroidGroup=new Group();
        building=createSprite(200,700,100,200);
        building.addImage(building_img);
        
    }

    play(){
        form.hide();
        
        if(mousePressedOver(building)){
            gamePosition="playEarth";
            rocket.y=500;
            building.velocityY=5;
            building.lifetime=100;
        
            
        }
        if(rocket.isTouching(asteroidGroup)){
          damage=damage+25;
          asteroidGroup.destroyEach();
        }
        if(rocket.isTouching(satellitesGroup)){
          damage=damage+50;
          satellitesGroup.destroyEach();
        }
           
        if(gamePosition==="playEarth"){
            rocket.x=mouseX;
            desert.velocityY=5;
            distance=Math.round(frameCount/5);
           if(distance>2500){
            gamePosition="playSky" 
           }
          }  
      
 if(gamePosition==="playSky"){
     background("black")
         desert.destroy();
     
    }
     
  if(distance>200 && distance<350){
    
    spawnSatellites();
  }
  if(distance>80 && distance<150){
    
    spawnAsteroids();
  }
  /*
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
}*/

  
 
  drawSprites();
  strokeWeight(4);
        stroke("White");
        textSize(20);
        text("Damage:"+damage,500,70);
    }
    
}
