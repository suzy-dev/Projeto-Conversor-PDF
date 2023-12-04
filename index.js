const fs = require("fs") // file system

/* Lendo arquivo
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

// Leitor e Escrito de arquivo .json 

fs.readFile("./file.json",'utf8',(erro, dados)=>{
    if(erro){
        console.log("Houve um erro na leitura do arquivo json", erro)
    }
    else {
        const objetoJson = JSON.parse(dados) //convertendo txt p objeto javascript
        console.log(typeof objetoJson)       // verificando se converteu p objeto

        objetoJson.nome = "Suzana Araujo"    //alterando chave nome 
        objetoJson.curso = ["Ciência da Computação","Ciência de Dados"] 

        fs.writeFile("./file.json", JSON.stringify(objetoJson),(erro)=>{    //strinfify > objeto p txt
            if(erro){
                console.log("Não foi possível escrever o arquivo")
            }
            else{
                console.log("Arquivo escrito com sucesso!")
            }
        })

        console.log(objetoJson)
    }
})
*/

function modificaUsuario(nome,idade,data_nasc,curso){
    fs.readFile("./file.json",'utf8',(erro, dados)=>{
        if(erro){
            console.log("Houve um erro na leitura do arquivo json", erro)
        }
        else {
            const objetoJson = JSON.parse(dados) //convertendo txt p objeto javascript
            console.log(typeof objetoJson)       // verificando se converteu p objeto
    
            objetoJson.nome = nome    //alterando chave nome 
            objetoJson.curso = curso
            objetoJson.idade = idade
            objetoJson.data_nascimento = data_nasc
    
            fs.writeFile("./file.json", JSON.stringify(objetoJson),(erro)=>{    //strinfify > objeto p txt
                if(erro){
                    console.log("Não foi possível escrever o arquivo")
                }
                else{
                    console.log("Arquivo escrito com sucesso!")
                }
            })
    
            console.log(objetoJson)
        }
    })
}

