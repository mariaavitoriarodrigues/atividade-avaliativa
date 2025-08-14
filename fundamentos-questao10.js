function converterNomeCompleto(nomeCompleto) {
    const nomes = nomeCompleto.trim().split(/\s+/);
    
    if (nomes.length < 2) {
        console.log("Formato inválido. Forneça nome e sobrenome.");
        return;
    }

    const primeiroNome = nomes[nomes.length - 1];
    const iniciais = nomes.slice(0, -1).map(n => n[0].toUpperCase() + '.').join(' ');

    const resultado = `${iniciais} ${primeiroNome}`;
    console.log(resultado);
}

converterNomeCompleto("Alan Mathison Turing"); 