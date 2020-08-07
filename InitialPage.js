class InitialPage{
    constructor(){
        this.title = createElement('h1');
        this.button = createButton('START');
    }

    hide(){
        this.title.hide();
        this.button.hide();
    }

    display(){
       
        fill("white");
        stroke("black");
        rect(displayWidth/4,displayHeight/2-150,displayWidth/4+350,displayHeight/2*1)

        this.title.html("xxx");
        this.title.position(displayWidth/2-65 , displayHeight/4/0.5);
        this.button.position(displayWidth/2+250 , displayHeight/2+230);
    
    
        this.button.mousePressed(()=>{
        this.title.hide();
        this.button.hide();

        form = new Form();
        form.display();
        });    
    }    
}