const hoje = new Date();

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const diaSemana = diasDaSemana[hoje.getDay()];

const hora = hoje.getHours().toString().padStart(2, '0');
const minutos = hoje.getMinutes().toString().padStart(2, '0');
const segundos = hoje.getSeconds().toString().padStart(2, '0');

console.log(`Hoje é: ${diaSemana}.`);
console.log(`A hora atual é: ${hora}:${minutos}:${segundos}.`);
