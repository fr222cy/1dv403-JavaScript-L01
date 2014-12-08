"use strict"

window.onload = function ()
{

var question = document.getElementById("questionBox");
var answer   = document.getElementById("answerBox");
var send     = document.getElementById("send");

var xhr = new XMLHttpRequest("http://vhost3.lnu.se:20080/question/1");

send.addEventListener("click", function (e)
{
console.log("Det gick!")
getQuestion();
});


var getQuestion = function () 
{
    console.log("getQuestion funkar!");
    xhr.onreadystatechanged = function () 
    {
      if (xhr.readyState === 4 && xhr.status == 200)
      {
          console.log(xhr.responsiveText);
      }
      else
      {
          console.log("Nu blev något fel.");
      }
      
      xhr.open("GET", "xhr", true);
    };
    
    
};

};




