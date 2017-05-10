// zadanie 9.4
function drawTree (x) {
var i = 0;
	while (i <= x - 1) {
	i++;
var star = ' ';
	for (var j = 1; j <= i; j++) {
      	star += '*';
    }
    console.log(star);
  }
}
x = prompt ('Wysokosc Choinki');
drawTree (x);