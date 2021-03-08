const escola = "Cod3r"

console.log(escola.charAt(4)) //pegar um caractere dentro da string
console.log(escola.charAt(5)) //same
console.log(escola.charCodeAt(3)) //código do caractere com o charset
console.log(escola.indexOf('3')) //identificar a posição no index da palavra 

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) // concatenação da string
console.log(escola.replace(3, 'e')) // trocar o caractere na string pelo valor determinado

console.log('Ana,Maria,Pedro'.split(',')) // transforma a string em um array