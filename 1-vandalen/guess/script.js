"use strict";

window.onload = function()
{
	
	var max = 100;
	var min = 0;
	var secret = Math.floor( Math.random() * (max-min)+1 )+min;
	var count = 0;
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number)
	{

		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		// Plats för förändring.
		
		if (isNaN(number) === false)
		{

			
			
				if (number > 100 || number < 0)
			{
				return [false, number + " är utanför intervallet 0 - 100!"];
			}
			
				if(number < secret)
			{
				++count;
				return [false, "Det hemliga talet är högre än: " + number];
			}
			
			if (number > secret)
			{
				++count;
				return [false, "Det hemliga talet är lägre än: " + number];
			}
			
			if (+number === secret)
			{
				++count;
				return [true, "Du gissade rätt! Det hemliga talet var: " + secret + ". Du gissade " + count + " gånger för att hitta det!"];
			}
			// Returnera exempelvis: 
			// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
			// [false, "Det hemliga talet är högre!"]
			// [false, "Det hemliga talet är lägre!"]
			// [false, "Talet är utanför intervallet 0 - 100"]		
		}
	else
	{
		return [false, number + " är ingen siffra!"];
	}

	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};