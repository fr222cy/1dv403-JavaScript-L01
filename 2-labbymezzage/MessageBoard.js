"use strict";

window.onload = function()
{
    var messages = [];
    var formText = document.getElementById("form");
    var send = document.getElementById("send");
    var messageObject = {};
    
    
    //När användaren klicka så på send så hoppar vi ner i denna funktion.
    send.addEventListener("click", function (e)
    {
        e.preventDefault();
        messageObject = new Message(formText.value, new Date());
        
        messages.push(messageObject);
        
        renderMessage(messages);
         
    });
 
    var renderMessage = function (messages){
       
       var element = document.createElement("p")
     
       
       
       for (var i = 0; i < messages.length; i++)
       {
            element.innerHTML = messages[i];
            
       }
       
        
        
    }
};