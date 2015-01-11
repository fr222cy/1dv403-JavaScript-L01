"use strict";



function Window(desk, name, image) {
    var template = document.querySelector(".temp");
    this.windowTemplate = template.content.querySelector(".window");
    var w = this.windowTemplate.cloneNode(true);
    this.windowTitle = w.querySelector(".topTitle");
    var closeButton = w.querySelector(".deleteIcon");
    var topImage = w.querySelector(".icon");
        
    this.desk = desk;
    this.w = w;
    
    this.content = w.querySelector(".windowContent");
    
    topImage.src = image;
        
        
    this.windowTitle.innerHTML = name;
    
    desk.element.appendChild(w);
    this.createLoader();
    this.dragable();
    closeButton.onclick = function() {
        this.close();
    }.bind(this);
    
}
//When i click on the closebutton i remove the windowelement from the desk.
Window.prototype.close = function() {
    
    this.desk.element.removeChild(this.w);
};  
//For each window I open the window will move 10px left and from top.
Window.prototype.setPosition = function(x, y) {
    this.w.style.left = x + "px";
    this.w.style.top = y + "px";
};  
    

//Loading Image
Window.prototype.createLoader = function() {
        
    this.loader = document.createElement("img");
    this.windowFooter = this.w.querySelector(".windowFooter");
    this.loader.src = "pics/ajaxLoader.gif";
    this.loader.className = "loader";
    this.windowFooter.appendChild(this.loader);
};  
//http://stackoverflow.com/questions/9334084/moveable-draggable-div. Makes window dragable.
Window.prototype.dragable = function () {
    var w = this.w;
    var offsetX;
    var offsetY;
        
    var divMove = function (e){
      w.style.top = e.clientY-offsetY + 'px';
      w.style.left = e.clientX-offsetX + 'px';
        console.log(this.w);
    
    };
    
    var mouseUp = function () {
        window.removeEventListener('mousemove', divMove);
    };
    
    var mouseDown = function (e){
        offsetX = e.clientX - parseInt(w.style.left);
        offsetY = e.clientY - parseInt(w.style.top);
        
        window.addEventListener('mousemove', divMove);
    };
    console.log(this.w);
    
    var windowTop = this.w.querySelector(".windowTop");
    
    windowTop.addEventListener("mousedown", mouseDown);
    window.addEventListener('mouseup', mouseUp);
};

