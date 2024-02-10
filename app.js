const Reader = require('./Reader.js')
const Processor = require('./Processor.js')
const Table = require('./Table.js')
const HTMLParser = require('./HTMLParser.js')

const leitor = new Reader()

async function main(){
    let dados = await leitor.Read("./projeto-3-conversor.csv")
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)

    // console.log("headers:",usuarios.header)
    // console.log("rows:",usuarios.rows)
    // console.log("qtd rows:",usuarios.RowCount)
    // console.log("qtd columns:",usuarios.ColumnCount)

    let html = await HTMLParser.Parse(usuarios)
    console.log(html)
}

main()