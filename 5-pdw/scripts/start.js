"use strict"

function StartBar(desk)
{
    this.element = document.querySelector(".startBar");
    this.desk = desk;
    this.start = {x:0,y:0};
}

StartBar.prototype.addApp = function(name, url)
{
    
    var image = document.createElement("img");
    image.src = url;
    var self = this;
    this.element.appendChild(image);
    
    image.addEventListener("click", function() 
    {
    var w = new Window(self.desk, name);
    
    self.start.x += 10;
    self.start.y += 10;
    
    w.setPosition(self.start.x, self.start.y);
    })
    
};