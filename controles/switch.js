//switch é uma seleção múltipla
//não é uma expressão relacional
//por padrão, a gente usa o break pra sair do case
//é possível colocar vários cases para uma setença de código 

const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7: 
            console.log('Aprovado')
            break
        case 6: case 5: case 4: 
        console.log('Recuperação')
        break
        case 3: case 2: case 1: case 0: 
        console.log('Reprovador')
        break
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
//imprimirResultado(8.9)
//imprimirResultado(6.55)
//imprimirResultado(3)
//imprimirResultado(-1)