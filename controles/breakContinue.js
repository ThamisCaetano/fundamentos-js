//desvio de fluxo pra fora do fluxo | saí do laço corrente
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`x = ${nums[x]}`)
}


//só faz sentido utilizar em estruturas de repetição
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`y = ${nums[y]}`)
}


//não é recomendado utilizar esse tipo de bloco de código por não ser organizado
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}