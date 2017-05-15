// zadanie 9.6
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
  list.innerHTML += '<li>item ' + itemsByTagName.length + '</li>';
});

var itemsByTagName = document.getElementsByTagName('li');

console.log(itemsByTagName);
console.log(itemsByTagName.length);