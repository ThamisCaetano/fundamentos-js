function criarPessoa(falar, nome){
    return {
        falar,
        nome
    }
}

console.log(criarPessoa('Meu nome é', 'Paul'))
console.log(criarPessoa('Meu nome é', 'João'))
console.log(criarPessoa('Meu nome é', 'Matt'))

//solução do desafio
function Pessoa(nome) {
        this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Paul')
p1.falar()

const p2 = new Pessoa('João')
p2.falar()

const p3 = new Pessoa('Matt')
p3.falar()