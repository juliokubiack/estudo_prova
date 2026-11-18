//5. Desafio: Faça um programa que solicite um número inteiro positivo ao 
//usuário. Depois, mostre a tabuada desse número de 1 até 10. Se o usuário digitar um número inválido, peça novamente.

let tabuada = 0;
let contador = 1;
let numero;
do {
     numero = +prompt("digite 1 numero");
    if(numero<=0){
        alert("digite novamente");
    }
} while (numero <= 0);

    while (contador <= 10) {
    tabuada = contador * numero;
    console.log(numero + " x " + contador + " = " + tabuada);
    contador++;
}
        