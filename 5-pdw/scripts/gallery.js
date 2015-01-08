"use strict";

function Gallery(desk, w) {
        this.w = w;
        this.getImages(desk, w);
        
    }
    
    //Get images from server.
Gallery.prototype.getImages = function(desk, w) {
    var xhr = new XMLHttpRequest();
    var self = this;

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
                
            w.windowFooter.removeChild(w.loader);
            var picArray = JSON.parse(xhr.responseText);
            this.windowContent = w.w.querySelector(".windowContent");
                
            for (var i = 0; i < picArray.length; i++) {
                var imageBox = document.createElement("div");
                imageBox.className = "imageBox";
                
                var image = document.createElement("img");
                
                var aTag = document.createElement("a");
                aTag.className = "galleryA";
                aTag.href = "#";
                image.className = picArray[i].URL;
                image.src = picArray[i].thumbURL;
             
                
                //When I click on a picture in the array...
                image.addEventListener("click", function(){
               
                self.imageViewer(desk, this);    
                
                });
                
                
                imageBox.appendChild(image);
                aTag.appendChild(imageBox);
                this.windowContent.appendChild(aTag);
            }   
                
        }       
                
    };
                
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
};              
                
Gallery.prototype.imageViewer = function(desk, img) {
    
    var name = "Image Viewer";
    var minPic = document.createElement("img");
    minPic.src = "pics/camera.png"
    var image = document.createElement("img");
    image.src = img.className;
                
    var ivw = new Window(desk, name, minPic);
            
    
    
    var windowContent = ivw.w.querySelector(".windowContent");
    
    windowContent.appendChild(image);
    ivw.windowFooter.removeChild(ivw.loader);
    ivw.matchFullsizeImage(image.width, image.height);
    
  
    
};