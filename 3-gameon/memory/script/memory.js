"use strict"

window.onload = function() {

    var StartGame = document.getElementById("start");
    var rows = 4;
    var columns = 4;
    var myObj = {};
    var box = document.getElementById("gameBox");
    var counter = document.getElementById("counter");
    var counterWindow = document.getElementById("counterWindow");
    var gameArea = document.getElementById("theGame");
    var restart = document.getElementById("restart");
    var pairs = document.getElementById("pairs");
    var count = 0;
    var element = 0;
    var flips = 0;
    var last = null;
    var pair = 0;
    var preventCheating = true;
    var victoryScore = 8;
    
    
    StartGame.addEventListener("click", function(e) {
        e.preventDefault();
        myObj = new RandomGenerator.getPictureArray(rows, columns);
        StartGame.innerHTML ="";
        createGame();
        
    });
    
    restart.addEventListener("click", function(e) {
        e.preventDefault();
        location.reload();
    });

    var createGame = function() {
        
        //Rensar spelbrädet och gissningarna.
        gameArea.innerHTML = "";


        // Loopar ut rows och skapar ett table.
        for (var i = 0; i < rows; i++) {
            var table = document.createElement("table");
            var tr = document.createElement("tr");

            table.appendChild(tr);

            //Loopar ut columns.
            //Skapar td, a och image tag.
            for (var j = 0; j < columns; j++) {
                var td = document.createElement("td");
                var showSecret = document.createElement("img");
                var aTag = document.createElement("a");
                
                aTag.href = "#";
                showSecret.src = "pics/0.png";
                showSecret.className = "pics/" + myObj[element] + ".jpg";
                aTag.img = showSecret;


                element++;
                aTag.addEventListener("click", guess)

                aTag.appendChild(showSecret);
                td.appendChild(aTag);
                tr.appendChild(td);


            }

            gameArea.appendChild(table);
            box.appendChild(gameArea);

        }
    };
    //En gissning.
    var guess = function(e) 
    {
        e.preventDefault();

        if(preventCheating === true)
        {
        this.img.src = this.img.className;
        
        ++flips;
        
        if(flips === 1)
        {
            last = this;
            last.removeEventListener("click", guess)    
        }

        
        if (flips === 2)
        {
            
            preventCheating = false;
            var current = this;
            last.addEventListener("click", guess);
            flips = 0;
            addGuess();
            
            
            if (current.img.className === last.img.className)
            {
                console.log("ett par");
                current.removeEventListener("click", guess)
                last.removeEventListener("click", guess)
                pair++;
                pairs.innerHTML = "Pairs: "+pair+"/8";
                preventCheating = true;
                if (pair === victoryScore)
                {
                    alert("Grattis du har vunnit!")
                }
           
            }

            else 
            {

                setTimeout(function()
                {
                    console.log(current);
                    console.log(last);
                    current.img.src = "pics/0.png";
                    last.img.src = "pics/0.png";
                    preventCheating = true;
                }, 500);
                
            }
            
        }
        
        
            
        
    }
    }



    //Räknar gissningar.
    var addGuess = function() {
        count++;
        counter.innerHTML = "Guesses: " + count;
        counterWindow.appendChild(counter);
    }
    
    
    
};