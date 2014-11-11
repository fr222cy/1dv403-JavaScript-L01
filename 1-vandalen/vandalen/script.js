"use strict";

var makePerson = function(persArr)
{
    
    
    var minAge = 0;
    var maxAge = 0;
    var averageAge = 0;
    var ageArray = [];
   
    var names = "";
    var nameArray = [];
    
  
    
    
    
    for(var i = 0; i < persArr.length; i += 1)
    {
        ageArray[i] = persArr[i].age;
    }
    
    // Math.min(ageArray[0], ageArray[1], ageArray[2], ageArray[3], ageArray[4])
    minAge = Math.min.apply(null, ageArray);
    maxAge = Math.max.apply(null, ageArray);
    
    
    // Adderar talen i arrayen.
    var sum = ageArray.reduce(function(a,b)
    { 
        return a + b;
    });
    
    // Får ut medelåldern.
    averageAge = Math.round(sum / ageArray.length);
 
    
	for( i = 0; i < persArr.length; i += 1)
	{
	    nameArray[i] = persArr[i].name;
	}
	
	// Sorterar namn arrayen.
	nameArray.sort(function(a,b)
	{
	    return a.localeCompare(b);
	});
	
	// Namnarrayen in i namnvariabeln. 
	names = nameArray.toString();
	
	// Space efter Kommatecken.
	names = names.split(",").join(", ");
	
	// Skapar result-objektet.
	var result =
	{
	  minAge:minAge,
	  maxAge:maxAge,
	  averageAge:averageAge,
	  names:names
	};
	// Returnerar resultatet.
    return result;
}; 

var data = 
[
    {name: "John Häggerud", age: 37}, 
    {name: "Johan Leitet", age: 36},    
    {name: "Mats Loock", age: 46}
];

var result = makePerson(data);

console.log(result);