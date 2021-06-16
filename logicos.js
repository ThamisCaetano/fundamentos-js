function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //comparação tipo OU
    const comprarTv50 = trabalho1 && trabalho2 //comparação tipo E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //ou exclusivo
    const manterSaudavel = !comprarSorvete //negação lógica | operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //o nome da costante é o valor do obj
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

