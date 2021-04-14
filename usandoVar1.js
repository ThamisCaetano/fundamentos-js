{{{{ var sera = 'Será???'}}}} //ela ficará visível para todos, memso que esteja fora do bloco de código
console.log(sera)


/* uma variável definida como var só possui dois escopos 
possíveis, ou ele é nível global, ou seja, visível na aplicação inteira

 
*/


//quando você define uma variável dentro da função, ela ficará visível apenas dentro da função
function teste () {
    var local = 123
    console.log(local)
}

teste()
