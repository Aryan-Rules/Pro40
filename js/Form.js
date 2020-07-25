class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Start Race');
    this.greeting = createElement('h2');
    this.button1 = createButton('Restart');
    this.wfop=createElement('h2')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.wfop.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("Hurdle Racing Game");
    title.position(450,0);

    this.input.position(505,displayHeight/2-80);
    this.button.position(550,displayHeight/2 );
    this.button1.position(displayWidth-100,20 );
    
    this.wfop.html("Waiting For Players.....")
    this.wfop.position(470,400)

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(500, displayHeight/4);

      
    });

    this.button1.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
      player.delete();
    });

  }
}
