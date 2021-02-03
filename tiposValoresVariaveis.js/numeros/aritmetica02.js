/*
 * Quando uma operação tem resultado que supera o
 * valor máximo representado,
 *o resultado é um valor infinito especial.
 * Em JS é indicado como Infinity
 */
Infinity
console.log(Number.POSITIVE_INFINITY)
console.log(1/0)
console.log(Number.MAX_VALUE + 1)   

/*
 * Caso seja menor que o menor número representado,
 * é indicado por -Infinity
 */
-Infinity
 console.log(Number.NEGATIVE_INFINITY - 1)
 console.log(-1/0)
 console.log(Number.MAX_VALUE - 1)

 /*
  * Em JS a divisão por zero não é um erro.
  * Porém quando a divisão tem como dividendo o
  * zero, o resultado é um tipo especial, o NaN
  */
 console.log(0/0)

 /*
 *O estouro negativo ocorre quando o resultado de uma operação está
 *mais próximo de zero do que do menor número representado.
 * Se o estouro negativo ocorre a partir de um número negativo
 * o resultado da operação é o zero negativo.
  */

 console.log(Number.MIN_VALUE / 2) // estouro negativo
 console.log(-Number.MIN_VALUE / 2) // zero negativo
 console.log(-1 / Infinity) // zero negativo
 -0

 /*
  * O zero negativo e o zero são quase idênticos.
  */

  let zeronegativo = -0
  let zero = 0
  console.log(zero === zeronegativo)

  let sobzero = 1 / zero
  let sobzeronegativo = 1 / zeronegativo

  console.log(sobzero === sobzeronegativo) // false, pois Infinity e -Infinity não são iguais
