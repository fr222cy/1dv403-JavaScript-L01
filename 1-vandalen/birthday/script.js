"use strict";

window.onload = function(){

	
	var birthday = function(date)
	{
		
			var nowDate = new Date();
			var userDate = new Date(date);
			var day = (1000 * 60 * 60 * 24);
            var myBirthday = 0;
			// Ger userDate året som nowDate har.
			userDate.setFullYear(nowDate.getFullYear());
			
			
		    myBirthday = Math.ceil((userDate.getTime() - nowDate.getTime())/day);
		    
		    //Om myBirthday får ett negativt värde så lägger vi till ett år.
			if (myBirthday <= -1)
			{
				return myBirthday + 365;
			}
			
			// Om myBirthday är samma som dagens datum, så returnerar vi case 0.
			if (myBirthday === nowDate)
			{
				return 0;
			}
			// Om myBirthday + en dag är lika med dagens datum. så returnerar vi case 1.
			if (myBirthday + 1 === nowDate)
			{
				return 1;
			}
		
		
		
			
			
			
			
			
			
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try 
		{
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};