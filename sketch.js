var iform,form,database,user, medic;
var appState = 0;
var userCount;
var form, user, game;

function preload(){
}

function setup() {
  createCanvas(displayWidth -20, displayHeight-30);
  
  database =  firebase.database();

  medic = new Medic();

  medic.getState();
  medic.start();
  
}
function draw() {
  
  
}

