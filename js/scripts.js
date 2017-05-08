// plik scripts.js
var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

/*
  komentarz blokowy
  var name = prompt('Wpisz swoje ID');
  alert('Witaj, ' + name);
  console.log(‘Zakomentowana się nie wywoła’);

*/

// wzór na pole trójkąta
var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');

var value = (a*a) + (2*a*b) - (b*b);
	if ((value < 0)) {
	alert("wynik ujemny:" + value);
}
else {
	alert('wynik dodatni:' + value);
	console.log('zmienna a' + a + ' zmienna b ' + b + ' wynosi: ' + value);
}