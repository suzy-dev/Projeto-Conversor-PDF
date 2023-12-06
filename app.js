const Reader = require('./Reader.js')
const Processor = require('./Processor.js')
const Table = require('./Table.js')

const leitor = new Reader()

async function main(){
    let dados = await leitor.Read("./projeto-3-conversor.csv")
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)

    console.log(usuarios.header)
    console.log(usuarios.rows)
}

main()