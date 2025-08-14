function modificarFrase(frase) {
    const novaFrase = frase.split(' ').map(palavra => {
        return palavra.length < 5 ? palavra.toUpperCase() : palavra.toLowerCase();
    }).join(' ');
    
    console.log(novaFrase);
}

modificarFrase("Hoje é Uma boa tarde para PROGRAMAR Em JavaScript");
