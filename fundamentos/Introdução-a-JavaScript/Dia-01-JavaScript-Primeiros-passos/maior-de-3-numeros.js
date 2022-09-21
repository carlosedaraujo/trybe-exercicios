let a = 25;
let b = 10;
let c = 45;

console.log("Maior de 3 números");

if (a > b && a > c) {
    console.log(a + " é maior que " + b + " e " + c);
} else if (b > a && b > c) {
    console.log(b + " é maior que " + a + " e " + c);
} else if (c > a && c > b) {
    console.log(c + " é maior que " + a + " e " + b);
}
