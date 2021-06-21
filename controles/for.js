//três partes importantes
/* 
    #1 declarar a variável que irá controlar a expressão
    #2 a expressão em si
    #3 o incremento
*/

let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}