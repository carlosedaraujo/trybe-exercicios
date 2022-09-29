const girafa = true;
const elefante = true;
const macaco = false;

function compareTrue(param1, param2) {
   
    //let estado = param1 && param2;
    
    if (param1 === true && param2 === true) {

        return console.log(true);

    } else {   

        return console.log(false);
    }
}

compareTrue(elefante, elefante);