const Reader = require('./Reader.js')

const leitor = new Reader()

async function main(){
    let dados = await leitor.Read("./projeto-3-conversor.csv")
    console.log(dados)
}

main()