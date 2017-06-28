var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

// Use the map method to create a new array where the first letter of each planet is capitalized

for(var i = 0 ; i < planets.length ; i++){
        planets[i] = planets[i].charAt(0).toUpperCase() + planets[i].substr(1);;
}

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(planet) {
    return planet[0] === "E";
});

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce(function(prev, curr) {
	return prev + " " + curr;
});

planets.forEach(function() {
	el.innerHTML = planets + `<br>` + ePlanets + `<br>` + sentence + `.`
});