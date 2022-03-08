function calcularMediaAluno(primeiraNota, segundaNota, terceiraNota) {
  const soma = primeiraNota + segundaNota + terceiraNota;
  const media = soma / 3;
  return media;
}

let resultado = '';

const primeiraNota = Number(prompt('Insira a PRIMEIRA nota:'));
const segundaNota = Number(prompt('Insira a SEGUNDA nota:'));
const terceiraNota = Number(prompt('Insira a TERCEIRA nota:'));

const media = calcularMediaAluno(primeiraNota, segundaNota, terceiraNota);

if (media < 7) {
  resultado = 'REPROVADO';
} else {
  resultado = 'APROVADO';
}

console.log('MEDIA:', media.toFixed(2));
console.log('RESULTADO:', resultado);
