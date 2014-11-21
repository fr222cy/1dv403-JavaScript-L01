"use strict";

window.onload = function()
{
    var messages = [];
    var formText = document.getElementById("form");
    var send = document.querySelector("send")
    var messageObject = {};
    
    send.addEventListener("click", function (e)
    {
        e.preventDefault();
        messageObject = new Message(formText, new Date());
        
        console.log(formText);
        console.log(messageObject);
    });
 

};