"use strict"

function Gallery()
{
    this.getPictures();
    
}

Gallery.prototype.getPictures = function()
{
            var xhr = new XMLHttpRequest();
           
           xhr.onreadystatechange = function()
            {
                if(xhr.readyState === 4)
                {
                    
                    var picArray = JSON.parse(xhr.responseText);
                    
                    
                }
            };
        
        xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/" , true);
        xhr.send(null);
       
        
}