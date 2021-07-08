let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return está implícito

console.log(dobro(5))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' //função sem parâmetros
ola = _ => 'Olá' //same

console.log(ola())