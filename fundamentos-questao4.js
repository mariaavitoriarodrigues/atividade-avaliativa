function verificaNumeros(x, y) {
    return x === 30 || y === 30 || (x + y === 30) || (x === 12 && y === 12);
}

console.log(verificaNumeros(30, 5)); 
console.log(verificaNumeros(12, 12)); 
console.log(verificaNumeros(15, 15)); 
console.log(verificaNumeros(10, 20)); 
console.log(verificaNumeros(10, 5));  
