"use strict"



function Window(desk, name, image, content) 
{
    var template = document.querySelector(".temp"); 
    var windowTemplate = template.content.querySelector(".window");
    var w = windowTemplate.cloneNode(true);
    var windowTitle = w.querySelector(".topTitle");
    var closeButton = w.querySelector(".deleteIcon");
    var self = this;
    
    this.desk = desk;
    this.w = w;
    
   var topImage = image.cloneNode(true);
    
    
     
    windowTitle.innerHTML = name;
    windowTitle.appendChild(topImage);
    desk.element.appendChild(w);
    
    
    closeButton.addEventListener("click", function () 
    {
    self.close();
    });
   
}

Window.prototype.close = function() 
{
   this.desk.element.removeChild(this.w);
};

Window.prototype.setPosition = function(x,y)
{
    this.w.style.left = x + "px";
    this.w.style.top =  y + "px";
}


