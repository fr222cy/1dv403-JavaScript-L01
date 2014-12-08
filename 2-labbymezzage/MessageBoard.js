"use strict";

window.onload = function()
{
    var messages = [];
    var formText = document.getElementById("form");
    var send = document.getElementById("send");
    var box = document.getElementById("box");
    var fieldset = document.getElementById("fieldset");
    var countMessage = document.getElementById("countMessage");
    var enter = document.getElementById("form");
    var messageObject = {};
    var count = 0;
    
    

    //När användaren klicka så på send så hoppar vi ner i denna funktion.
    send.addEventListener("click", function (e)
    {
        if (formText.value !== "")
        {
        messageObject = new Message(formText.value, new Date());
        messages.push(messageObject);
        renderMessage(messages.length -1);
        }
    });
    
    // Om användaren klicka på enter så hoppar vi ner i denna funktion, som fungerar som send funktionen.
  
    enter.addEventListener("keydown", function(e)
    {
        if(e.keyCode === 13 && !e.shiftKey)
        {
            e.preventDefault();
        
        if (formText.value !== "")
        {
            messageObject = new Message(formText.value, new Date());
            messages.push(messageObject);
            renderMessage(messages.length -1);
        }
    }
    });
 
 
    var renderMessage = function (messageID)
    {
      count = messageID+1;
      //Skapar nya element och gör det till klasser.
      var textWindow = document.createElement("div");
      textWindow.className = "textWindow";
      
      var showText = document.createElement("p");
      showText.className = "showText";
      
      var showClock = document.createElement("img");
      showClock.className = "showClock";
      showClock.src = "pics/time-icon.png";
      
      var showDelete = document.createElement("img");
      showDelete.className = "showDelete";
      showDelete.src = "pics/delete-icon.png"
      
      var showTime = document.createElement("p");
      showTime.className = "showTime";
      
      
      
           
      //Hämtar värderna ifrån arrayen.
      showText.innerHTML = messages[messageID].getHTMLText();
      showTime.innerHTML = messages[messageID].getDateText();
      countMessage.innerHTML = "Number of Messages: " + count;
      
      textWindow.appendChild(showText);
      textWindow.appendChild(showTime);
      textWindow.appendChild(showClock);
      textWindow.appendChild(showDelete);
      box.appendChild(textWindow);
      fieldset.appendChild(countMessage);
      //Nollställer textrutan.
      formText.value = "";
      
      //När man klickar på klockan så visas datumet.
      showClock.addEventListener("click", function ()
    {
       alert(messages[messageID].getDate().toString());
    });
      //När man klickar på delete så kallar man på removeText.
        showDelete.addEventListener("click", function ()
    {
       var answer = confirm("Vill du ta bort detta meddelandet?");
       
       if(answer === true)
       {
       messages.splice(messageID, 1);
       removeText();
       --count;
       }
      
       
    });
      
    };
    var removeText = function (messageID)
    {
        //Ta bort alla meddelanden.
        document.getElementById("box").innerHTML = "";
        
        //Renderar ut alla meddelanden.
        for (var i = 0; i < messages.length; ++i )
        {
            renderMessage(i);
        }
        
    };
};


