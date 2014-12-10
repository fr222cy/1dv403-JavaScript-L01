"use strict";


var quiz = {
   
    formtext    : document.getElementById("form"),
    infoBox     : document.getElementById("infoBox"),
    questionBox : document.getElementById("questionBox"),
    answerBox   : document.getElementById("answerBox"),
    send        : document.getElementById("submit"),
    displayQ    : document.getElementById("displayQ"),
    xhr         : new XMLHttpRequest(),
    adress      : "http://vhost3.lnu.se:20080/question/1",
    q : null,
    a : null,
    counter : 0,
    wrongArray : [],
    
    init: function()
    {
            quiz.send.addEventListener("click", function (e)
        {
            
            e.preventDefault();
            quiz.sendMessage(quiz.q.nextURL, quiz.formtext.value);
        });
       quiz.getQuestion(quiz.adress);
    },
    
    getQuestion : function (adress)
        {
            
            quiz.xhr.onreadystatechange = function()
            {
                if(quiz.xhr.readyState === 4)
                {
                    quiz.q = JSON.parse(quiz.xhr.responseText);
                    var showQuestion = quiz.q.question;
                    quiz.displayQ.innerHTML = showQuestion;
                }
            };
        
        quiz.xhr.open("GET", adress, true);
        quiz.xhr.send(null);
        },
    
    
    
    
    sendMessage : function(newAdress, ans)
    {
        console.log(newAdress);
        console.log(quiz.xhr.readyState);
        var newxhr = new XMLHttpRequest();
        
        newxhr.onreadystatechange = function () 
        {
          
            if (newxhr.readyState === 4)
            {   
                quiz.a = JSON.parse(newxhr.responseText);
                console.log(quiz.a.message);
                quiz.counter++;
                
                if (quiz.a.message == "Correct answer!" && newxhr.status === 200)
                {
                    quiz.getQuestion(quiz.a.nextURL);
                    quiz.infoBox.innerHTML = "Rätt svar!";
                    quiz.wrongArray.push(quiz.counter);
                    quiz.counter = 0;
                    quiz.formtext.value = "";
                }
                     if (newxhr.status === 400)
                    {
                        quiz.formtext.value = "";
                        quiz.infoBox.innerHTML = "Fel Svar!";
                    }
                    
                    else if (!quiz.a.nextURL)
                    {
                        quiz.infoBox.innerHTML = "Grattis! Du är våran första miljonär!";
                        console.log(quiz.wrongArray);
                      
                        for (var i = 0; i < quiz.wrongArray.length; i++)
                        {
                            var showRes = document.createElement("p");
                            quiz.questionBox.appendChild(showRes);
                            
                            showRes.innerHTML = "Fråga " + (i + 1) + ": " + quiz.wrongArray[i] + " gissningar.";
                        }
                    }
               
               
                                 
                 
                    
            }
        };
        var json = { answer : ans };
        var jsonStringify = JSON.stringify(json);
        
        newxhr.open("POST",newAdress,true);
        newxhr.setRequestHeader("Content-Type","application/json");
        newxhr.send(jsonStringify);
    }
};
window.onload = quiz.init;








