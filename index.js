const fs = require("fs") // file system

// Lendo arquivo
fs.readFile("./suzana.araujo",{encoding: 'utf-8'},(erro, dados)=>{
    if (erro) {
        console.log("Houve uma falha na leitura do arquivo")
    }
    else {
        console.log(dados)
    }
})

// Escrevendo arquivo
let conteudo = "Mas tenho medo de dirigir moto"
fs.writeFile("./suzana.araujo",conteudo,(erro)=>{
    if(erro){
        console.log("Houve um erro no registro do arquivo.")
    }
    else {
        console.log("Registro feito com sucesso!")
    }
})