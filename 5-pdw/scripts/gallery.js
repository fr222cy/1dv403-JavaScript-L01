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
                image.className = "galleryImages";
                
                image.src = picArray[i].thumbURL;
                image.picture = picArray[i].URL;

                
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
    
    var image = document.createElement("img");
    image.src = img.picture;
   

    var ivw = new Window(desk, "Image Viewer", "pics/camera.png");
    img.className = "imageViewerPic";
    
    var windowContent = ivw.w.querySelector(".windowContent");
    windowContent.parentNode.className ="imageViewer";
    windowContent.appendChild(image);
    
    ivw.windowFooter.removeChild(ivw.loader);
   
    
  
    
};