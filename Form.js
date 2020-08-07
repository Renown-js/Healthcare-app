class Form {

    constructor(){
       
        this.input = createInput("Name");
        this.gender = createInput("Gender");
        this.age = createInput("Age");
        this.contact = createInput("Contact");
        this.signInButton = createButton("SIGN IN");
    }

    hide(){
       
        this.inputLb.hide();
        this.genderLb.hide();
        this.ageLb.hide();
        this.contactLb.hide();

        this.input.hide();
        this.gender.hide();
        this.age.hide();
        this.contact.hide();
        this.signInButton.hide();
    }

    display(){
       
        fill("white");
        stroke("black");
        rect(displayWidth,displayHeight/2-150,displayWidth/4+350,displayHeight/2*1)

        this.inputLb = createElement("h5");
        this.inputLb.html("USER : ");
        this.inputLb.position(displayWidth/2-375 , displayHeight/2-120);
        this.input.position(displayWidth/2-320 , displayHeight/2-100);
            
    
        this.genderLb = createElement("h5");
        this.genderLb.html("GENDER : ");
        this.genderLb.position(displayWidth/2-375 , displayHeight/2-40);        
        this.gender.position(displayWidth/2-300 , displayHeight/2-20);

        this.ageLb = createElement("h5");
        this.ageLb.html("AGE : ");
        this.ageLb.position(displayWidth/2-375 , displayHeight/2+70);
        this.age.position(displayWidth/2-330 , displayHeight/2+90);

        this.ctcLb = createElement("h5");
        this.ctcLb.html("CONTACT : ");
        this.ctcLb.position(displayWidth/2-375 , displayHeight/2+180);
        this.contact.position(displayWidth/2-300 , displayHeight/2+200);

        this.signInButton.position(displayWidth/2+235 , displayHeight/2+250);

        this.signInButton.mousePressed(()=>{

            //Hiding the form 
            this.input.hide();
            this.gender.hide();
            this.age.hide();
            this.contact.hide();
            this.signInButton.hide();

            this.inputLb.hide();
            this.genderLb.hide();
            this.ageLb.hide();
            this.ctcLb.hide();
            
            // Storing data from Form input to User
            user.name = this.input.value();
            user.gender =this.gender.value();
            user.age=this.age.value();
            user.contact =this.contact.value();

            userCount += 1 ;
            user.index = userCount ;
            user.update();

            user.updateUserCount(userCount);
        });
    }
}

