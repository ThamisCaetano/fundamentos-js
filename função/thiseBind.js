const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//bind é o método responsável por amarrar determinado obj 
//para ele ser o dono da execução daquele método
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()