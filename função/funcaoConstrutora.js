function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado (que pertence apenas a função carro)
    let velocidadeAtual = 0

    //metodo publico (vai acrescentar a velocidade atual)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico (vai ser responsável por pegar a velocidade atual)
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 30*2)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


/* a função construtora funciona como uma classe, um molde e 
a partir desse molde se pode criar vários objs  */
