class Player {
consturctor(){}
getCount(){
var playerCountRef=database.ref("PlayerCount")
playerCountRef.on("value",function(data){
playerCount=data.val();
})

}
updateCount(){
database.ref("/").update({playerCount:playerCount})

}
update(name){
var PlayerIndex="jugador"+playerCount
datebase.ref(playerIndex).set({nombre:nombre})

}

}