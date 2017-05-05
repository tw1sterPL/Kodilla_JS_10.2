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
var b = prompt('Podaj wartość h');

var triangleArea = a*b/2;
if ((triangleArea < 0)) {
	alert("błąd, takiego pola nie da sie obliczyć - spróbuj ponownie");
}
else {
alert('Pole wynosi, ' + triangleArea);
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
}