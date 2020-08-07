class Medic{
    constructor(){

    }
    getState(){
        var appStateRef  = database.ref('appState');
        appStateRef.on("value",function(data){
           appState = data.val();
        })
    
    }
    
    update(state){
        database.ref('/').update({
          appState: state
        });
      }
    
    async start(){
        if(appState === 0){
          user = new User();
          var userCountRef = await database.ref('userCount').once("value");
            if(userCountRef.exists()){
                userCount = userCountRef.val();
                user.getUserCount();
            }
            iform = new InitialPage();
            iform.display();
        }
    }   
}