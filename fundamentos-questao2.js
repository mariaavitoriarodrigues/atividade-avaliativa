const a = 5, b = 6, c = 7;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`Área do triângulo: ${area.toFixed(2)}`);
