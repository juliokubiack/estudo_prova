# estudo_prova


1. While — Estrutura de repetição
1. Fácil: Faça um programa que mostre todos os números de 1 até 10 utilizando while.

2. Fácil: Faça um programa que mostre todos os números pares de 0 até 50.

3. Médio: Peça ao usuário 5 números utilizando prompt() e calcule a soma de todos eles. Mostre o resultado no final.

4. Difícil: Faça um programa que peça números ao usuário até que ele digite 0. Ao terminar, mostre:
- Quantos números foram digitados (sem contar o zero).
- A soma dos números.
- A média dos números.
5. Desafio: Faça um programa que solicite um número inteiro positivo ao usuário. Depois, mostre a tabuada desse número de 1 até 10. Se o usuário digitar um número inválido, peça novamente.

FEITOOOOO

2. For — Laço de repetição
1. Fácil: Utilizando for, mostre os números de 1 até 20.

2. Fácil: Mostre todos os números ímpares entre 1 e 100.

3. Médio: Peça um número ao usuário e calcule o fatorial dele.

4. Difícil: Faça um programa que peça 10 números ao usuário. No final, mostre:
- O maior número.
- O menor número.
- A soma de todos os números.
- A média.
5. Desafio: Faça um programa que mostre todos os números primos entre 1 e 100.

3. Arrays — Vetores
1. Fácil: Crie um array chamado frutas contendo 5 frutas. Depois, mostre todas elas individualmente utilizando console.log() e seus índices.

2. Fácil: Crie um array com 5 números. Depois, mostre:
- O primeiro elemento.
- O último elemento.
- O tamanho do array utilizando .length.
3. Médio: Crie um array com 10 números. Depois, mostre:
- A soma dos valores.
- A média.
- Quantos números são pares.
4. Difícil: Crie um array com os seguintes números:
let numeros = [12, 5, 30, 8, 45, 2, 19, 50];


Encontre o maior número, o menor número e a posição de cada um no array.

5. Desafio: Peça ao usuário 10 números e armazene todos em um array. Depois:
- Mostre o array completo.
- Mostre os números em ordem crescente.
- Mostre os números pares em outro array.
- Mostre quantos números são maiores que 20.



4. ForEach — Percorrendo Arrays
1. Fácil: Crie um array com 5 nomes e utilize forEach() para mostrar todos eles.

2. Fácil: Crie um array com 10 números e utilize forEach() para mostrar o dobro de cada número.

3. Médio: Crie um array com 8 números. Utilize forEach() para mostrar os números pares e contar quantos números são ímpares.

4. Difícil: Crie um array com 6 notas de alunos. Utilize forEach() para calcular a média de todas as notas. Depois, mostre quais alunos foram aprovados, considerando média maior ou igual a 7.

5. Desafio: Crie um array de produtos:
let produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Fone", preco: 80 },
    { nome: "Notebook", preco: 3000 }
];


Utilize forEach() para:
- Mostrar o nome e o preço de cada produto.
- Calcular o valor total de todos os produtos.
- Mostrar somente os produtos que custam mais de R$ 100.

5. Desafio bônus — Misturando conteúdos
Desafio final
Sistema de notas de uma turma

Desenvolva um programa para cadastrar as notas de vários alunos.

O programa deverá:
1. Perguntar quantos alunos serão cadastrados.
2. Utilizar while para validar a quantidade de alunos (deve ser maior que zero).
3. Utilizar for para solicitar as notas de cada aluno.
4. Armazenar todas as notas em um array.
5. Utilizar forEach() para percorrer as notas.
6. Calcular a média geral da turma.
7. Contar quantos alunos foram aprovados e reprovados.
8. Mostrar a maior e a menor nota.
Regras:
- Nota entre 0 e 10.
- Média igual ou superior a 7: aprovado.
- Média abaixo de 7: reprovado.
- Notas inválidas devem ser solicitadas novamente.
