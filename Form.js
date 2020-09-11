class Form{
    constructor(){
        this.button=createButton("Proceed to launching ground");
    }
    hide(){
        this.button.hide();
    }

    display(){
        this.button.position(100,100);
        this.button.mousePressed(()=>{
            this.button.hide();
            gameState="play";
        });
    }
}