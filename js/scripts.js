// zadanie 9.2
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	var allNames = allNames.push('Marian');
}

console.log(allNames);