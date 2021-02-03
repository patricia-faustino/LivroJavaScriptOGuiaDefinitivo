/**
 * Os números visto em JS são próximos dos números reais,
 * ou seja, são representações dos números reais.
 * Ao ser comparados números decimais podem apresentar erros de 
 * arrendondamento.
 */

let x = 0.3 - 0.2
let y = 0.2 - 0.1
console.log(x == y) // false: os dois valores não são os mesmos
console.log(x == 0.1) // false
console.log(y == 0.1) // true