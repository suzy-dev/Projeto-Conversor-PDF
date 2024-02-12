const Reader = require('./Reader.js')
const Processor = require('./Processor.js')
const Table = require('./Table.js')
const HTMLParser = require('./HTMLParser.js')
const Writer = require('./Writer.js')
const PDFWriter = require('./PDFWriter.js')

const leitor = new Reader()
const escritor = new Writer()

async function main(){
    let dados = await leitor.Read("./projeto-3-conversor.csv")
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)

    // console.log("headers:",usuarios.header)
    // console.log("rows:",usuarios.rows)
    // console.log("qtd rows:",usuarios.RowCount)
    // console.log("qtd columns:",usuarios.ColumnCount)

    let html = await HTMLParser.Parse(usuarios)
    

    aleatorio = Date.now() //gera um arquivo aleatorio
    escritor.Write(`${aleatorio}.html`,html)

    PDFWriter.WritePDF(`${aleatorio}.pdf`,html)
}

main()