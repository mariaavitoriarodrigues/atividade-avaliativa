function maisFrequente(arr) {
    const contagem = {};
    let maxNum = arr[0];
    let maxCount = 1;

    arr.forEach(num => {
        contagem[num] = (contagem[num] || 0) + 1;
        if (contagem[num] > maxCount) {
            maxCount = contagem[num];
            maxNum = num;
        }
    });

    console.log(`Número mais frequente: ${maxNum} (ocorrências: ${maxCount})`);
}

maisFrequente([1, 3, 2, 3, 4, 3, 2, 1, 3]);
