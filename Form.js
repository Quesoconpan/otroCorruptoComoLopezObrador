class Form{
constructor(){}
display(){

var title=createElement("h2");
title.html("juego de carrearas 2077");
title.position(130,0);

var input=createInput("nombre");
var button=createButton("play");
var greeting=createElement("h3");
input.position(130,60);
button.position(250,200);

button.mousePressed(function(){
input.hide();
button.hide();

var name=input.value();
playerCount=+1;
player1.update(name);
player1.updateCount(playerCount)

greeting.html("hola"+name);
greeting.position(130,160)

})

}

}


