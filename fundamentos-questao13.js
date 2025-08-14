function somaCubos(lista) {
    const soma = lista.reduce((total, num) => total + Math.pow(num, 3), 0);
    console.log(`Soma dos cubos: ${soma}`);
}

somaCubos([1, 2, 3, 4]); 
