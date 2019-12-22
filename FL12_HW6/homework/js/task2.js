const a = +prompt('Input the side A of the triangle:');
const b = +prompt('Input the side B of the triangle:');
const c = +prompt('Input the side C of the triangle:');
let res;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers ');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length ');
} else {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            res = 'Equilateral triangle';
        } else if (a === b && b !== c || a === c && b !== c || b === c && a !== c) {
            res = 'Isosceles triangle';
        } else {
            res = 'Scalene triangle';
        }
    } else {
        res = 'Triangle doesn’t exist';
    }
    console.log(res);
}