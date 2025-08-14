function compararNumeros(a, b) {
    
    if (a % 2 !== 0 && b % 2 === 0) {
        console.log(`${a} (ímpar) é maior que ${b} (par)`);
    } else if (b % 2 !== 0 && a % 2 === 0) {
        console.log(`${b} (ímpar) é maior que ${a} (par)`);
    } else {
        
        if (a > b) {
            console.log(`${a} é maior que ${b}`);
        } else if (b > a) {
            console.log(`${b} é maior que ${a}`);
        } else {
            console.log(`Os números são iguais: ${a} = ${b}`);
        }
    }
}

compararNumeros(8, 7);  
compararNumeros(12, 24); 
compararNumeros(15, 11); 
