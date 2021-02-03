/**
 * JS inclui uma construtora Date()
 *  para criar objetos que representam datas e horas.
 */

var then = new Date(2020, 0, 1) // primeiro dia do ano de 2020
var later = new Date(2020, 0, 1, 17, 10, 30) // o mesmo dia às 17:10:30, hora local

var now =  new Date() // A data e hora atuais
var elapsed = now - then // subtração da data: intervalo em milisegundos

console.log(elapsed)

console.log(later.getFullYear()) // ano atual
console.log(later.getMonth()) // mês atual em número inteiro. 0 corresponde a janeiro
console.log(later.getDate()) // retorna a data
console.log(later.getDay()) // retorna o dia da semana
console.log(later.getHours()) // retorna a hora local
console.log(later.getUTCHours()) // retorna as horas em UTC, dependendo do fuso horário
console.log(later.toString())// retorna o objeto Date em String na hora local
console.log(later.toUTCString())// retorna o objeto Date em String no fuso horário UTC
console.log(later.toLocaleDateString())// retorna a data no formato dd/mm/yyyy
console.log(later.toLocaleTimeString())// retorna a hora local no formato hh:mm:ss
console.log(later.toISOString())// retorna data e hora no formato ISO 8601, com o formato YYYY-MM-DDTHH:mm:ss.sssZ ou ±YYYYYY-MM-DDTHH:mm:ss.sssZ
