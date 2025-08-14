function somaTamanhos(frase) {
    const palavras = frase.trim().split(/\s+/); 
    const soma = palavras.reduce((total, palavra) => total + palavra.length, 0);
    console.log(`Soma dos tamanhos das palavras: ${soma}`);
}

somaTamanhos("JavaScript é uma linguagem poderosa"); 
