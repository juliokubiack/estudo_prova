const notas = [3, 4, 5, 2, 6];
let soma=0;
let contador=0;
let media=0;

for (const nota of notas){
       soma=soma+nota;
       contador++
} media=soma/contador;
if (media>=7){
console.log(`Aprovado, sua media é de ${media} `)}
else{
 console.log(`reprovado, sua media foi de ${media}`)}