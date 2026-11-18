//4. Difícil: Faça um programa que peça números ao usuário até que ele digite 0. Ao terminar, mostre:
//- Quantos números foram digitados (sem contar o zero).
//- A soma dos números.
//- A média dos números.

let soma = 0;
let contador = 0;

let numero = +prompt("Digite um número (0 para parar):");

while (numero > 0) {
    soma =soma+ numero;
    contador++;
    numero = +prompt("Digite um número (0 para parar):");
}

if (contador > 0) {
    let media = soma / contador;
    console.log("Quantidade de números:", contador);
    console.log("Soma:", soma);
    console.log("Média:", media);
} else {
    console.log("Nenhum número foi digitado.");
}