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
      if(gamePosition==="playEarth"){
        if(rocket.isTouching(asteroidGroup)){
          damage=damage+25;
          asteroidGroup.destroyEach();
        }

        if(rocket.isTouching(satellitesGroup)){
          damage=damage+50;
          satellitesGroup.destroyEach();
        }
           
      
            rocket.x=mouseX;
            desert.velocityY=5;
            distance=Math.round(frameCount/5);
           if(distance>2500){
            gamePosition="playSky" 
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
  
        if(keyWentDown(UP_ARROW)){
          rocket.velocityY=rocket.velocityY-2;
        }
        if(keyWentDown(DOWN_ARROW)){
          rocket.velocityY=rocket.velocityY+2;
        }
        console.log(distance);

        if(damage>=100 ||distance>=400){
          gameState="end";
        }
        if(distance>=400){
          strokeWeight(10);
        stroke("White");
        textSize(50);
        text("GAME OVER ",500,500);
        background(mars);
        gameState="end";
        }
        camera.position.y=rocket.y;
      }
        drawSprites();
        strokeWeight(4);
        stroke("White");
        textSize(20);
        text("Damage :" +damage,500,rocket.y-200);
        text("Distance : " +distance,50,rocket.y+200);
        text("Speed : " +rocket.velocityY*(-1),500,rocket.y+200);
    }
    end(){
        strokeWeight(4);
        stroke("White");
        textSize(20);
        text("GAME OVER ",500,500);
    }
    
}
