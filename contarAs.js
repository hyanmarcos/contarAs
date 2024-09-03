function contarAs(texto) {
  return texto.toLowerCase().split('a').length - 1;
}

const texto = prompt("Digite um texto:");
const quantidadeAs = contarAs(texto);
console.log(`A letra 'a' aparece ${quantidadeAs} vezes no texto.`);