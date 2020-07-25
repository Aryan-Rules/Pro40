class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new HurdleRacer();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount()
      }
      form = new Form()
      form.display();
    }
     r1=createSprite(20,800)
     r1.addImage(r1load)
     r1.scale=0.5;
     r2=createSprite(20,800)
     r2.addImage(r2load)
     r2.scale=0.5;
    cars=[r1,r2]
    
  }

  play(){ 
    form.hide();
     HurdleRacer.getPlayerInfo(); 
     if(allPlayers !== undefined){
      background("white")
      image(backgroundImage, 0,0,displayWidth*5,800);
        var index = 0;
         var x ;
          var y=-70;
             for(var plr in allPlayers) {
               index = index + 1 ;
               y = y + 300;
                x = displayWidth+allPlayers[plr].distance;
                 cars[index-1].x = x; 
                 cars[index-1].y = y;

               if (index === player.index){ 
                 fill("black")
                 ellipse(x,y,60,60)
                 camera.position.x = cars[index-1].x
                  camera.position.y = displayWidth/3
                 }
                }
    
    }


    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
      console.log(player.distance)
    }

    if(player.distance<4330&&player.distance>4331){
      gameState=2
      player.racerend+=1;
      HurdleRacer.updateracersEnd(player.racerend)

    }
    drawSprites();
  }


  
}
