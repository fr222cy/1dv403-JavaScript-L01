"use strict";

function RSS (desk, w)
{
this.server = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt")
this.getFeed(desk, w)
}
RSS.prototype.getFeed = function (desk, w)
{
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
                
            var feed = xhr.responseText;
            
            console.log(feed);
            w.content.appendChild(feed);
        }       
                
    };
                
    xhr.open("GET", this.server , true);
    xhr.send();
}; 
    
