function ordenarLista(lista) {
    const ordenada = [...lista].sort((a, b) => a - b);
    console.log(`Lista ordenada: ${ordenada}`);
}

ordenarLista([40, 10, 25, 5, 70]); 
