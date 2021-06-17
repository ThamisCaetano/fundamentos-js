const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//se nota for maior do quê 7 ele mostra aprovado
//se a nota for menor, ele mostra reprovado

//nota >= 7 |é sempre uma expressão que sempre vai retornar vdd ou falso
//'Aprovado' retorna se é verdadeiro | primeira parte
//'Reprovado' retorna se é falso | segunda parte

console.log(resultado(7.1))
console.log(resultado(6.7))