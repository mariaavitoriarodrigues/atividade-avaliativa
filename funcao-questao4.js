function palavraNaFrase(frase, palavra) {
    const presente = frase.toLowerCase().includes(palavra.toLowerCase());
    console.log(presente ? "Palavra encontrada." : "Palavra não encontrada.");
}

palavraNaFrase("Aprender JavaScript é trabalhoso ", "JavaScript"); 
palavraNaFrase("Testando funções", "Python"); 
