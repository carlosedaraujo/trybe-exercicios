
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { 
        
        golden: 2,
        silver: 3, 
    
    }
    

}

console.table(player);


let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let a in names) {

    console.log("Olá " + names[a])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

 
 const a = 20;
 const b = 200;

 function maiorNumero (a, b) {
  
  if(a > b) {

    console.log(a + " é maior que " + b);

  } else {

    console.log(b + " é maior que " + a);
  }

  return;

}

maiorNumero(a, b);

const d = 60;
const e = 160;
const f = 59;


function maior3Numeros () {
    if(d > e && d > f) {

        console.log(d + ' é maidr e, f ' + e + ' ' + f);

    } else if(e > d && e > f) {

        console.log(e + ' é maior que ' + d + ' ' + f);

    } else if(f > e && f > d) {

        console.log(f + ' é maior que ' + d + ' ' + e);
    }
    
    

    return;

}

maior3Numeros();


let valor =  -3;

function posneg(valor) {
    if (Math.sign(valor) === 1) {

        console.log("positive");
    
    } else if (Math.sign(valor) === -1) {

        console.log("negative");
    
    } else {
        
        console.log("Zero");

    }

    return;   
}
posneg(valor);

let x = -30
let y = 90
let z = 60

function ang(x, y, z) {

    const soma = x + y + z;

    if(Math.sign(x) === -1 || Math.sign(y) === -1 || Math.sign(z) === -1) {
        console.log("angulo inválido");
        return;
    }
    
    if(soma == 180) {
        
        console.log("true");
    
    } else {

        console.log("false");

    }

 return;

}

ang(x, y, z);