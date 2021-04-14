/*variável var tem dois escopos, o de função e o de global
variáveis definidos com o valor de let tem escopo global, de função
e escopo de bloco
*/
var numero = 1
{
    let numero = 2 //o let tem o escopo apenas dentro do bloco
    console.log('dentro = ', numero)
}
console.log('fora=', numero)