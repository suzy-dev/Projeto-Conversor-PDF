const fs = require("fs") // file system

fs.readFile("./suzana.araujo",{encoding: 'utf-8'},(erro, dados)=>{
    if (erro) {
        console.log("Houve uma falha na leitura do arquivo")
    }
    else {
        console.log(dados)
    }
})