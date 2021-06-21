//a estrutura while ou ele não executa nenhuma vez ou ele executa
//uma quantidade N de vezes
//é uma estrutura de repetição e verdadeiro ou falso
//enquanto for verdadeiro executa, quando for falso ela para

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção de escolha foi ${opcao}`)
}

console.log('Até a próxima')