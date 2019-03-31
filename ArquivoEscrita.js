const fs = require('fs')

//Objeto convertido para JSON
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// Conversão para JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})