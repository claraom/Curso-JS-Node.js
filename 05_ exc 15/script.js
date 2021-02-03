let numero = prompt('Numero: ');
let check = false;
if (numero > 1) {
    for (let aux = 2; aux < numero; aux++) {
        if (numero % aux == 0) {
            console.log('nao e primo');
            check = true;
            break;
        }
    }
    if (check == false){
        console.log('e primo');
    }
}

/*
//OUTRO MÉTODO
let divisoes = 0;

for (let i = 1; i <= numero ; i++){
    if(numero % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log('e primo');
} else {
    console.log('nao e primo');
}
*/