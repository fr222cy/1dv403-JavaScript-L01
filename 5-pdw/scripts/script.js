"use strict"

window.onload = function ()
{
    
var desk = new Desktop();
var startB = new StartBar(desk);


startB.addApp("Gallery", Gallery, "pics/camera.png");
startB.addApp("Memory", null, "pics/games.png");
startB.addApp("RSS Feed", RSS, "pics/rssnew.png");
startB.addApp("Chat", Chat, "pics/chat.png");
};

