function tratarErroELancar(erro) {
    //throw new Error ('...')
    //throw true
    //throw 'mensagem'
    //throw 10

    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{ 
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)


//try é um bloco de código que pode gerar algum tipo de erro
//redirecionar e tratar o erro com o catch
//finally sempre será executado, se der certo ou errado no try