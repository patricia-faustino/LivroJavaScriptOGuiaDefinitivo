const a = 3
const b = 2

// quando se escreve sme quebra de linha o primeiro ponto e vírgula torna-se obrigatório
const a1 = 3; const b2 = 4 

/* JS trata da quebra de linha como ponto e vírgula somente
 se não consegue analisar o código sem os pontos e vírgulas*/

var a2
a2
=
3
console.log(a2)

let x = 2
let f = 3
/*let y = x + f
(a + b).toString()*/ // f é interpretado como uma função


/* para que f não seja entendido com uma chamada de função,
 usa-se o ; como protetor*/

 /*
 *Se a instrução começa com (,[,/,+ ou - há a possibilidade de ser
 *interpretada como continuação da instrução anterior.
 * Em geral, é menos comum ver uma linha iniciar com /,+ ou -.
 */

let y = x + f
;(a + b).toString() 

/*
* Após utilizar return evite quebrar linhas.
* No exemplo abaixo o interpretador entende
*return; true;
 */
if(a >= 2){
    return
    true
}

/*
* Os operadores  ++ ou -- podem ser prefixados ou pós-fixados
* deve-se evitar quebrar linhas para incluí-los a uma variável.
* No caso abaixo verifica-se que o interpretrador irá incrementar y e não x.
 */
x
++
y