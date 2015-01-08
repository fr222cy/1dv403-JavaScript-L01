"use strict"

window.onload = function ()
{
    
var desk = new Desktop();
var startB = new StartBar(desk);


startB.addApp("Gallery", "pics/camera.png");
startB.addApp("Memory", "pics/games.png");


};

