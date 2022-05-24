/* Desenvolva um programa capaz de ler um valor inteiro N. N * 2 linhas de saída vão ser apresentadas na 
execução do programa, seguindo a lógica do exemplo fornecido. Para os valores com mais de seis dígitos,
todos os dígitos devem ser apresentados.*/

let lines = gets().split("\n");
let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  print(`${i} ${i ** 2} ${i ** 3}`);
  print(`${i} ${i ** 2 +  1 } ${i ** 3 + 1}`);
}