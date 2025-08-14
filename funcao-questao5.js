function maiorPalavra(frase) {
    const palavras = frase.trim().split(/\s+/);
    let maior = palavras[0];

    for (let palavra of palavras) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    console.log(`Maior palavra: ${maior}`);
}

maiorPalavra("Estou aprendendo programação com JavaScript");
