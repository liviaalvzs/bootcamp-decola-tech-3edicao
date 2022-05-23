/* Crie uma função que recebe o array alunos e um número que irá representar a média final;

Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final; */

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Livia',
		nota: 10,
		turma: '2C',
	},
    {
		nome: 'Raphael',
		nota: 9.8,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 8));