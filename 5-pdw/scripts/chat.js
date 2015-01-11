"use strict";

function Chat (desk, w)
{
    console.log("hej");
    var name = "Walter White";
    
    var chatBox = document.createElement("div");
    chatBox.className = "chatBox";
    
    var input = document.createElement("input");
    input.className = "chatInput";
    
    
    var fieldset = document.createElement("fieldset");
    fieldset.className = "fieldset";
    
    fieldset.appendChild(input);
   
    w.content.appendChild(fieldset);
    w.content.appendChild(chatBox);
    
    var socket = new io("http://raz-cloud.cloudapp.net/", {forceNew: true});
    
    input.addEventListener("keydown", function(e)
    {
        if(e.keyCode === 13 && !e.shiftKey)
        {
            e.preventDefault();
        
        if (input.value !== ""){
            
            socket.emit("message", {message: input.value});
            input.value = "";
        }
     }
    });
    
    socket.on("connect", function()
    {
        socket.emit("setname", {name:name});
    });
    
    socket.on("message", function(data)
    {
        chatBox.innerHTML += data.name + " : " + data.message + "<br>";
    })
}

