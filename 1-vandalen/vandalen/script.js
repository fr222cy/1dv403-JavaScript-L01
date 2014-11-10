"use strict";

var makePerson = function(persArr)
{
    
    
    var minAge = 0;
    var maxAge = 0;
    var averageAge = 0;
    
    var names = "";
    var ageArray = [];
    var nameArray = [];
    
    for(var i = 0; i < persArr.length; i += 1)
    {
        ageArray[i] = persArr[i].age;
    }
    // Math.min(ageArray[0], ageArray[1], ageArray[2], ageArray[3], ageArray[4])
    minAge = Math.min.apply(null, ageArray);
    maxAge = Math.max.apply(null, ageArray);
    console.log(minAge);
	console.log(maxAge);
	
	
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