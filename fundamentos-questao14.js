function contemPalavra(frase, palavra) {
    console.log('ops');
    const presente = frase.toLowerCase().includes(palavra.toLowerCase());
    console.log(presente ? "Palavra encontrada." : "Palavra não encontrada.");
}

contemPalavra("Programar em JavaScript é trabalhoso", "JavaScript"); 
contemPalavra("Aprendendo lógica", "python"); 
