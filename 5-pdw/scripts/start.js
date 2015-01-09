"use strict"

function StartBar(desk) {
    this.element = document.querySelector(".startBar");
    this.desk = desk;
    this.start = {
        x: 0,
        y: 0
    };
    this.winArr = [];
    this.apps = {};
}

StartBar.prototype.addApp = function(name, constructor, url) {

    var image = document.createElement("img");
    image.src = url;

    this.element.appendChild(image);
    
    this.apps[name] = {name: name, constructor: constructor, img: url};
    
    image.onclick = function() {
        this.open(name)
        //this.nameCheck(name, image, w);
    }.bind(this);

};

StartBar.prototype.open = function(appName) {
    
    var app = this.apps[appName];
    if (app.constructor != null)
    {
        var w = new Window(this.desk, app.name, app.img);
        
        new app.constructor(this.desk,w);
        
        this.start.x += 10;
        this.start.y += 10;
        w.setPosition(this.start.x, this.start.y);
    }
}

//Checks what apps we are opening.
StartBar.prototype.nameCheck = function(name, image, w) {

    if (name === "Gallery") {

        new Gallery(this.desk, w);

    }

    if (name === "Memory") {
        console.log("Har kommer memoryt.")
    }
}