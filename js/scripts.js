// zadanie 9.5
var withMenuItemsClass = document.getElementsByClassName('button');

console.log(withMenuItemsClass);

for (var x = 0; x < withMenuItemsClass.length; x++) {
	alert(withMenuItemsClass[x].innerText);
}