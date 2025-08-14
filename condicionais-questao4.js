const alunos = [
    ["Aluno1", [10, 50, 100]],
    ["Aluno2", [55, 78, 90]],
    ["Aluno3", [80, 70, 85]],
    ["Aluno4", [60, 60, 60]],
    ["Aluno5", [90, 95, 100]]
];

for (const [nome, notas] of alunos) {
    const soma = notas.reduce((acc, n) => acc + n, 0);
    const media = soma / notas.length;

    if (media >= 70) {
        console.log(`${nome}, média ${media.toFixed(2)}, Aprovado`);
    } else {
        console.log(`${nome}, média ${media.toFixed(2)}, Reprovado`);
    }
}
