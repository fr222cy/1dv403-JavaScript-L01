"use strict"

function StartBar(desk) {
    this.element = document.querySelector(".startBar");
    this.desk = desk;
    this.start = {
        x: 0,
        y: 0
    };
    this.winArr = [];
}

StartBar.prototype.addApp = function(name, url) {

    var image = document.createElement("img");
    image.src = url;

    this.element.appendChild(image);

    image.onclick = function() {


        var w = new Window(this.desk, name, image);
        
        this.nameCheck(name, image, w);

        this.start.x += 10;
        this.start.y += 10;

        w.setPosition(this.start.x, this.start.y);
    }.bind(this);

};
//Checks what apps we are opening.
StartBar.prototype.nameCheck = function(name, image, w) {

    if (name === "Gallery") {

        new Gallery(this.desk, w);

    }

    if (name === "Memory") {
        console.log("Har kommer memoryt.")
    }
}