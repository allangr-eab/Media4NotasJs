let n1 = prompt("Digite o 1º valor:");
let n2 = prompt("Digite o 2º valor:");
let n3 = prompt("Digite o 3º valor:");
let n4 = prompt("Digite o 4º valor:");

let resultado = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) / 4;

alerta('A média das notas  ${n1},  ${n2},  ${n3}  e  ${n4}  é:  ${resultado}')

se (resultado >= 6){
    alerta('Parabéns, sua nota é  ${resultado}, você está aprovado');
}
se (resultado <= 4){
    alerta('Olá, sua nota é  ${resultado}, você está reprovado');
}
se(resultado == 5){
    alerta('Sua nota é  ${resultado}, você está de recuperação');
}