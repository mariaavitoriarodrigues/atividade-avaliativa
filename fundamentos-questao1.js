
const hoje = new Date();
const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

console.log(`Hoje é: ${diasSemana[hoje.getDay()]}.`);
console.log(`A hora atual é: ${hoje.toLocaleTimeString("pt-BR")}`);
