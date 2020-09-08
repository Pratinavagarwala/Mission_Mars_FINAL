class Form{
    constructor(){
        this.buttom=createButton("Proceed to launching ground");
    }
    hide(){
        this.buttom.hide();
    }

    display(){
        this.buttom.position(100,100);
        this.buttom.mousePressed(()=>{
            this.buttom.hide();
            gameState="play";
        })
    }
}