function maiorEMenor(lista) {
    if (lista.length !== 10) {
        console.log("A lista deve conter exatamente 10 números.");
        return;
    }

    const maior = Math.max(...lista);
    const menor = Math.min(...lista);
    console.log(`Maior: ${maior}, Menor: ${menor}`);
}

maiorEMenor([5, 12, 3, 88, 45, 1, 23, 34, 99, 7]);
