class Game{
constructor(){}
gameState(){

var gameStateRef=datebase.ref('GameState');
gameStateRef.on("value",function(data){
gameState=data.val();
})

}

update(){
datebase.ref("/").update({
gameState:state
})

}

start(){
if(gameState===0){
player1=new Player();
player1.getCount();
form1=new Form();
form1.display();
}

}

}
