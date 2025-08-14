function contarVogaisConsoantes(frase) {
    const vogais = 'aeiouáéíóúãõâêîôû';
    let v = 0, c = 0;

    for (let char of frase.toLowerCase()) {
        if (/[a-záéíóúãõâêîôû]/.test(char)) {
            if (vogais.includes(char)) {
                v++;
            } else {
                c++;
            }
        }
    }

    console.log(`Vogais: ${v}, Consoantes: ${c}`);
}

contarVogaisConsoantes("Programar em JavaScript é divertido");
