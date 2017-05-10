// zadanie 9.3
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone slonie';
var animalUpperCased = animal.toUpperCase();
var textCharsAfter = text.replace('Papugi','Zielone slonie');
var partOfText = text.slice(7,37);


console.log(animalUpperCased, partOfText);