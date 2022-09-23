let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index = index+1) {
console.log(numbers[index]);
}


console.log('segundo')


let acumula = 0;


for(let index = 0; index < numbers.length; index = index+1) {
    acumula = acumula + numbers[index];

    }
    console.log(acumula);

console.log("Terceiro");
console.log(acumula/numbers.length);

console.log('Quarto');

let media = acumula/numbers.length;

if (media > 20) {

    console.log("valor maior que 20");

} else {

    console.log("valor menor que 20");    
}

console.log('Quinto');


let numero = 0

for(let index = 0; index < numbers.length; index = index + 1) {
    
    if (numbers[index] > numero) {

        numero = numbers[index];
    
    // eslint-disable-next-line no-empty
    } else {}

    }
    console.log('O maior número do array é: ' + numero);

console.log('Sexto');

let impar = [];
let index = 0

for (let index = 0; index < numbers.length; index = index + 1);
    
    if (numbers[index] % 2 != 0) {

        impar.push(numbers[index]);

    } else if (number[index]{

        console.log("Proximo numero");
    }

    console.log(impar.lenght);