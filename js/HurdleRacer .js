class HurdleRacer {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.racerend=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
     name:this.name,
      distance:this.distance
    });
  }

  delete(){
    database.ref('players').set({
     allPlayers:[]
     
    })
   }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  racerendCount(){
    var racerCountRef = database.ref('RacersEnd');
    racerCountRef.on("value",(data)=>{
     this.racersEnd = data.val();
    })
  }

  static updateracersEnd(racercount){
    database.ref('/').update({
      RacerEnd:racercount
    }); 

  }
}
