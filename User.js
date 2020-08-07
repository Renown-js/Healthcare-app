
class User{
    constructor(){
        this.index = null; 
        this.name = null;
        this.gender = null;
        this.age=0;
        this.contact=null;
    }

    update(){
        var userIndex ="users/user"  + this.index ;
        database.ref(userIndex).set({
            name : this.name,
            gender : this.gender,
            age : this.age,
            contact : this.contact
        })
      
    }

    updateUserCount(count){
        database.ref("/").update({
            userCount : count
        })
    }   
    
    getUserCount(){
        var getuserRef = database.ref("userCount");
        getuserRef.on("value" , (data)=>{
            userCount = data.val();
        });
    }

    

    static getUserInfo(){
        var userInforef=database.ref("users");
        userInforef.on("value",(data)=>{
            allUsers = data.val();
        })
    }
}