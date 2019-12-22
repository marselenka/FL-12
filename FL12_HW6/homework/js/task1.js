const a = +prompt('Input first value: ');
const b = +prompt('Input second value: ');
const c = +prompt('Input third value: ');
const disc = b * b - 4 * a * c;
let x1, x2, res;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Invalid input data');
} else {
    if (disc > 0) {
        x1 = (-b + Math.sqrt(disc)) / (2 * a);
        x2 = (-b - Math.sqrt(disc)) / (2 * a);
        res = `x1=${x1}, x2=${x2}`;
    } else if (disc === 0) {
        x1 = (-b) / (2 * a);
        res = `x=${x1}`;
    } else if (disc < 0) {
        res = 'no solution';
    }
    console.log(res);
}