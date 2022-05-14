/*
 * 
 * < 17: muito abaixo do peso
 * < 18,5: abaixo do peso
 * < 25: normal
 * > 25: acima do peso
 * 
 * peso/altura**2
 */

const imcTable = {  0: 'Muito abaixo do peso',
                    17: 'Abaixo do peso',
                    18.5: 'Peso ideal',
                    25: 'Acima do peso',
                };

let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;

function calcImc(event) {
    event.preventDefault();
    let imc = (peso/(altura*altura)).toFixed(1);
    document.getElementById('resultado').innerHTML = imc;
}

