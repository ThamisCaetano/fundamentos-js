function Pessoa() {
    this.idade = 0

    const self = this //essa constante não irá mudar nunca
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa