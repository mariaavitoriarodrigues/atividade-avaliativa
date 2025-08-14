function checarNumeros(a, b, c) {
    if (a >= 50 && a <= 99 && b >= 50 && b <= 99 && c >= 50 && c <= 99) {
        console.log("Sucesso: Todos os números estão no intervalo.");
    } else {
        console.log("Erro: Um ou mais números estão fora do intervalo.");
    }
}

checarNumeros(55, 80, 90); 
checarNumeros(45, 80, 90); 
