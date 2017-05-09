// funkcja: wzór na pole trójkąta
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 18);
var triangle3Area = getTriangleArea(10, 20);

function getTriangleArea(a, h) {
	if (a <= 0 || h <=0) {
    return 'nieprawidlowe dane';
	}	
	else {
		var result = a * h/2;
		return result;
	}	
}

console.log( triangle1Area, triangle2Area, triangle3Area );